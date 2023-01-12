import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import * as Async from 'async'
import { PeliculaService } from './../../../../core/servicios/pelicula.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit  {

  @Output() regresarEmit = new EventEmitter()
  @Input() autores: any
  @Input() titlePelicula: string = ''
  nameAutor: string = ''
  peliculas: any = []
  isActor = false
  isloading = false;

  constructor(private peliculaService: PeliculaService,private router: Router) {
  }

  ngOnInit(): void {
    console.log("autores", this.autores)
  }
  verPeliculasFirmadas(name: string, films: any) {
    let t = this;
    this.peliculas = []
    this.isloading = true
    Async.eachSeries(films, function(res: any, cb) {
      let id = res.split("https://swapi.dev/api/films/")
      t.peliculaService.getOnePelicula(id[1].split("/")[0]).subscribe(res => {
        t.peliculas.push(res.lista)
        cb()
      })
    }, (err) => {
      if (err) {
        console.log(err)
        return
      }
      if (t.peliculas.length > 0) {
        t.nameAutor = name
        t.isActor = true
        this.isloading = false
      }
    })
  }
  regresar () {
    this.regresarEmit.emit(true)
    //this.router.navigate(['/pelicula/lista']);
  }
}
