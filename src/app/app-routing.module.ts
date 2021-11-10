import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LogoutGuard } from './services/logout.guard';

const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate:[LogoutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
