import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './ui/input/input.component';
import { SearchbarComponent } from './ui/searchbar/searchbar.component';
import { HorizontalComponent } from './ui/layouts/horizontal/horizontal.component';
import { HeaderComponent } from './ui/layouts/header/header.component';
import { FooterComponent } from './ui/layouts/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StarRatingComponent } from './ui/star-rating/star-rating.component';
import { StarComponent } from './ui/star-rating/star/star.component';


@NgModule({
  declarations: [
    InputComponent,
    SearchbarComponent,
    HorizontalComponent,
    HeaderComponent,
    FooterComponent,
    StarRatingComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    InputComponent,
    SearchbarComponent,
    HorizontalComponent,
    HeaderComponent,
    FooterComponent,
    StarRatingComponent,
    StarComponent
  ]
})
export class SharedModule { }
