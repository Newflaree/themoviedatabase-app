import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

// Swiper
import Swiper from 'swiper';

// Interfaces
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[] = [];

  constructor() { 
  }

  ngAfterViewInit() {
    const swiper = new Swiper( '.swiper-container', {
      slidesPerView: 5.5,
      freeMode: true,
      spaceBetween: 15,
      breakpoints: {
        330: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 15,
        }
      },
    });
  }

  ngOnInit(): void {
  }
}
