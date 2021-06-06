import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { MovieResponse } from 'src/app/interfaces/movie-response';


// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit { 

  public movie: MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMovieDetails( id ).subscribe( movie => {
      console.log( movie );
      this.movie = movie
    });
  }
}
