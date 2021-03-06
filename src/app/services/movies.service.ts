import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Interfaces
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

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
      language: 'es-ES',
      page: this.defaultPage.toString()
    }
  }

  resetPage() {
    this.defaultPage = 1; 
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

  searchMovies( text: string ):Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text };

    return this.http.get<NowPlayingResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    );
  } 

  getMovieDetails( id: string ) {
    return this.http.get<MovieResponse>( `${ this.baseUrl }/movie/${ id }`, {
      params: this.params
    }).pipe( 
      catchError( err => of(null) ) 
    );
  }

  getCast( id: string ) {
    return this.http.get<CreditsResponse>( `${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe( 
      map( resp => resp.cast ),
      catchError( err => of([]) )
    );
  }
}
