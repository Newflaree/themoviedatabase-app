import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Interfaces
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private defaultPage = 1;
  public loading: boolean = false;

  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: 'b8eadbfb0d89caebec2e778a80e07807',
      language: 'es-Es',
      page: this.defaultPage.toString()
    }
  }

  getMovies():Observable<Movie[]> {
    if ( this.loading ) { 
      return of([]); 
    }

    this.loading = true;

    return this.http.get<NowPlayingResponse>( `${ this.baseUrl }/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( ( resp ) => resp.results ),
      tap( () => {
        this.defaultPage += 1;  
        this.loading = false;
      })
    );
  }
}
