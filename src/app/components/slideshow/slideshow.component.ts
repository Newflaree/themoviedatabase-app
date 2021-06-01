import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

// Swiper
import Swiper from 'swiper';

// Interfaces
import { Movie } from 'src/app/interfaces/now-playing-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] = [];
  public swiper: Swiper;

  constructor() { 
    this.swiper = new Swiper( '.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

  ngAfterViewInit():void {
    this.swiper = new Swiper( '.swiper-container', {
      // Optional parameters
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log( this.movies );
  }

  onPrev() {
    this.swiper.slidePrev();
  }

  onNext() {
    this.swiper.slideNext();
  }

}
