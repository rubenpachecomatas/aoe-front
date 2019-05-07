import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AddcivComponent } from './components/addciv/addciv.component';
import { DelcivComponent } from './components/delciv/delciv.component';
import { ModcivComponent } from './components/modciv/modciv.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'addciv', component: AddcivComponent },
  { path: 'deleteciv', component: DelcivComponent },
  { path: 'updateciv', component: ModcivComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
