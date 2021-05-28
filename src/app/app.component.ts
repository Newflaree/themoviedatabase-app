import { Component } from '@angular/core';

// Services
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private moviesService: MoviesService ) {
    moviesService.getMovies()  
    .subscribe( resp => {
      console.log( resp.results );
    })
  }
}
