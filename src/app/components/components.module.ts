import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Ratting
import { RatingModule } from 'ng-starrating';
              
// Modules
import { PipesModule } from '../pipes/pipes.module';

// Components
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }
