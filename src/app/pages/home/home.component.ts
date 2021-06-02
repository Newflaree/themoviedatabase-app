import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

// Interfaces
import { Movie } from 'src/app/interfaces/now-playing-response';

// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener( 'window:scroll', [ '$event' ] )
  onScroll () {
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1700;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if ( pos > max ) { 
      if ( this.moviesService.loading ) { return; }

      this.moviesService.getMovies().subscribe( movies => {
        this.movies.push( ...movies );
      })
    }
  }

  constructor( private moviesService: MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
    .subscribe( movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

  ngOnDestroy() {
    this.moviesService.resetPage();
  }
}
