import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DataAccessService } from './services/data-access.service';
import { HttpClientModule } from "@angular/common/http";
import { AddcivComponent } from './components/addciv/addciv.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AddcivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
