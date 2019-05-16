import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DataAccessService } from './services/data-access.service';
import { HttpClientModule } from "@angular/common/http";
import { AddcivComponent } from './components/addciv/addciv.component';
import { FormsModule } from '@angular/forms';
import { DelcivComponent } from './components/delciv/delciv.component';
import { ModcivComponent } from './components/modciv/modciv.component';
import { NavComponent } from './components/nav/nav.component';
import { ConnToModService } from './services/conn-to-mod.service';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { UserComponent } from './components/user/user.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AddcivComponent,
    DelcivComponent,
    ModcivComponent,
    NavComponent,
    FilterPipe,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFontAwesomeModule
  ],
  providers: [DataAccessService, ConnToModService],
  bootstrap: [AppComponent]
})
export class AppModule { }
