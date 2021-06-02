import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { Movie } from 'src/app/interfaces/now-playing-response';

// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Movie[] = [];
  public text: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.text = params.text

      this.moviesService.searchMovies( params.text ).subscribe( movies => {
        this.movies = movies;
      })
    })
  }

}
