import { Component, OnInit } from '@angular/core';

// Interfaces
import { Movie } from 'src/app/interfaces/now-playing-response';

// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];

  constructor( private movieServeice: MoviesService ) { }

  ngOnInit(): void {
    this.movieServeice.getMovies()
    .subscribe( resp => {
      this.movies = resp.results;
    });
  }
}
