import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { TollBarComponent } from './toll-bar/toll-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopTollBarComponent } from './top-toll-bar/top-toll-bar.component';
import { OffreComponent } from './offre/offre.component';
import { OffreService } from './offre/offre.service';
import { SettingsComponent } from './entreprise/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  
  MatCardModule
} from '@angular/material';
import { LogInComponent } from './user/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterEntrepriseComponent } from './entreprise/register-entreprise/register-entreprise.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    TollBarComponent,
    TopTollBarComponent,
    OffreComponent,
    SettingsComponent,
    LogInComponent,
    HomeComponent,
    RegisterEntrepriseComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule  ,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule

    
  
  ],
    exports: [
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatBadgeModule,
     MatListModule,
     MatGridListModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatRadioModule,
     MatDatepickerModule,
     MatChipsModule,
     MatTooltipModule,
     MatTableModule,
     MatPaginatorModule,
     MatCardModule
  ],
  providers: [UserService,HttpClient,OffreService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
