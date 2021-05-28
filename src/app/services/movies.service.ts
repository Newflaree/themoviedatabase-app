import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getMovies() {
    return this.http.get( 'https://api.themoviedb.org/3/movie/now_playing?api_key=b8eadbfb0d89caebec2e778a80e07807&language=es-Es&page=1' );
  }
}
