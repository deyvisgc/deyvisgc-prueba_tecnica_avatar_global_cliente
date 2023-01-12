import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { PeliculaService } from '../../../../core/servicios/pelicula.service';

@Component({
  selector: 'app-peliculas-firmadas',
  templateUrl: './peliculas-firmadas.component.html',
  styleUrls: ['./peliculas-firmadas.component.scss']
})
export class PeliculasFirmadasComponent implements OnInit {
  @Output() regresarEmit = new EventEmitter()
  @Input() peliculas: any
  @Input() nameAutor: string = ""
  constructor(private peliculaService: PeliculaService) {
  }
  ngOnInit(): void {
  }
  regresar () {
    this.regresarEmit.emit(true)
    //this.router.navigate(['/pelicula/lista']);
  }
}
