import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log( params.text );
      //TODO: call service
      this.moviesService.searchMovies( params.text ).subscribe( movies => {
        console.log( movies );
      })
    })
  }

}
