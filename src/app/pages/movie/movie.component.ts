import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// Interfaces
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { Cast } from 'src/app/interfaces/credits-response';


// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit { 

  public movie: MovieResponse;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails( id ).subscribe( ( movie: any ) => {
      if ( !movie ) {
        this.router.navigateByUrl( '/home' );
        return;
      }

      this.movie = movie
    });

    this.moviesService.getCast( id ).subscribe( cast => {
      this.cast = cast.filter( actor => actor.profile_path != null );
    });
  }

  onBack() {
    this.location.back(); 
  }
}
