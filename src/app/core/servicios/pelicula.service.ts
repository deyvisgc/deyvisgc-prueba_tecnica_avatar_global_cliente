import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  getPelicula(): Observable<any>  {
    const URL = environment.host + "authors"
    return this.http.get(URL)
  }
  getAutor(id: string): Observable<any>  {
    const URL = environment.host + "authors" + "/" + id 
    return this.http.get(URL)
  }
  getOnePelicula(id: string): Observable<any>  {
    const URL = environment.host + "authors" + "/one-pelicula/" + id 
    return this.http.get(URL)
  }
}
