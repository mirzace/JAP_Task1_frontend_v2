import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ScreenplayRoutingModule } from './screenplay-routing.module';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component';
import { ScreenplayPreviewComponent } from './screenplay-preview/screenplay-preview.component';
import { ScreenplayRateComponent } from './screenplay-rate/screenplay-rate.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ScreenplayDetailComponent,
    ScreenplayPreviewComponent,
    ScreenplayRateComponent
  ],
  imports: [
    CommonModule,
    ScreenplayRoutingModule,
    FormsModule,
    SharedModule,
    ButtonsModule.forRoot(),
  ]
})
export class ScreenplayModule { }
