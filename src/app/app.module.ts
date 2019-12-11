import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserService } from './user/user.service';
import { HttpClientModule , HttpClient,HTTP_INTERCEPTORS   } from '@angular/common/http';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { TollBarComponent } from './toll-bar/toll-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopTollBarComponent } from './top-toll-bar/top-toll-bar.component';
import { OffreComponent } from './offre/offre.component';
import { OffreService } from './offre/offre.service';
import { SettingsComponent } from './entreprise/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogInComponent } from './user/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterEntrepriseComponent } from './entreprise/register-entreprise/register-entreprise.component';
import { DropdownModule } from 'angular-bootstrap-md';
import { EntrepriseService } from './entreprise/entreprise.service';
import { AceuilEntrepriseComponent } from './entreprise/aceuil-entreprise/aceuil-entreprise.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './user/token-interceptor.service';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AceuilEmployerComponent } from './entreprise/aceuil-employer/aceuil-employer.component';
import { SettingEmployerComponent } from './entreprise/setting-employer/setting-employer.component';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
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
    RegisterEntrepriseComponent,
    AceuilEntrepriseComponent,
    AceuilEmployerComponent,
    SettingEmployerComponent
  ],
  imports: [
    
    NotifierModule.withConfig(customNotifierOptions),
    Ng2SearchPipeModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
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
    MatCardModule,
    MDBBootstrapModule,
    DropdownModule,
     CollapseModule, 
     WavesModule


    
  
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
  providers: [UserService,HttpClient,OffreService,MatDatepickerModule,EntrepriseService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
