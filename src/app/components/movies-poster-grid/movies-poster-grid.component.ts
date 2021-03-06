import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Movie } from 'src/app/interfaces/now-playing-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onMovie( movie: Movie ) {
    this.router.navigate([ '/movie', movie.id ])
  }
}
