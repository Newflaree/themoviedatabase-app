import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ratting
import { RatingModule } from 'ng-starrating';
              
// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Pages
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

// Components
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
