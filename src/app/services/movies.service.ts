import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getMovies():Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>( 'https://api.themoviedb.org/3/movie/now_playing?api_key=b8eadbfb0d89caebec2e778a80e07807&language=es-Es&page=1' );
  }
}
