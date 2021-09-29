import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenplayDetailComponent } from './screenplay-detail/screenplay-detail.component';
import { ScreenplayPreviewComponent } from './screenplay-preview/screenplay-preview.component';
import { ScreenplayRateComponent } from './screenplay-rate/screenplay-rate.component';

const routes: Routes = [
  { path: '', component: ScreenplayPreviewComponent },
  { path: 'screenplay/:id', component: ScreenplayDetailComponent },
  { path: 'rate', component: ScreenplayRateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenplayRoutingModule { }
