import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AddcivComponent } from './components/addciv/addciv.component';
import { ModcivComponent } from './components/modciv/modciv.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: PrincipalComponent },
  { path: 'addciv', component: AddcivComponent },
  { path: 'updateciv', component: ModcivComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
