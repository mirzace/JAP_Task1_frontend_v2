import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '../core/guards/no-auth.guard';
import { HorizontalComponent } from '../shared/ui/layouts/horizontal/horizontal.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [NoAuthGuard] },
  { path: 'account', component: HorizontalComponent, loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  { path: '', component: HorizontalComponent, loadChildren: () => import('./screenplay/screenplay.module').then(m => m.ScreenplayModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
