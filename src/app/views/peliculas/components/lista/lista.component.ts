import { Component } from '@angular/core';
import { PeliculaService } from './../../../../core/servicios/pelicula.service';
import * as Async from 'async'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  peliculas: any = []
  autores: any = []
  titlePelicula: string = ''
  isActor = false;
  isloading = false;

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  constructor(private peliculaService: PeliculaService) {
    this.fetchPeliculas()
  }
  fetchPeliculas() {
    this.isloading = true
    this.peliculaService.getPelicula().subscribe(res => {
      this.peliculas = res.lista.results
      this.isloading = false
    })
  }
  obtenerActor(title: any, authors: any) {
    let t = this;
    //
    this.autores = []
    this.isloading = true
    Async.eachSeries(authors, function(res: any, cb) {
      let id = res.split("https://swapi.dev/api/people/")
      t.peliculaService.getAutor(id[1].split("/")[0]).subscribe(res => {

        t.autores.push(res.lista)
        cb()

      })
    }, (err) => {
      if (err) {
        console.log(err)
        return
      }
      if (t.autores.length > 0) {
        t.titlePelicula = title
        t.isActor = true
        this.isloading = false
      }
    })
  }
}
