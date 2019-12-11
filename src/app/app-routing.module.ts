import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { OffreComponent } from './offre/offre.component';
import { SettingsComponent } from './entreprise/settings/settings.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterEntrepriseComponent } from './entreprise/register-entreprise/register-entreprise.component';
import { AceuilEntrepriseComponent } from './entreprise/aceuil-entreprise/aceuil-entreprise.component';
import { AuthGuard } from './auth.guard';
import { AceuilEmployerComponent } from './entreprise/aceuil-employer/aceuil-employer.component';
import { SettingEmployerComponent } from './entreprise/setting-employer/setting-employer.component';
const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'registerEntreprise', component:RegisterEntrepriseComponent  ,

     canActivate:[AuthGuard],
 
  },  
  { path: 'AcceuilEmployer', component:AceuilEmployerComponent 
  ,  children:[
    {path:"employer",component:SettingEmployerComponent},
    {path:"offre",component:OffreComponent}] 
  },

  { path: 'AcceuilEntreprise', component:AceuilEntrepriseComponent , 
    children:[
    {path:"entreprise",component:SettingsComponent},
    {path:"offre",component:OffreComponent}]
   },
  {path:"home",component:HomeComponent,
    children:[
    {path:"entreprise",component:SettingsComponent},
    {path:"offre",component:OffreComponent},
  ]
}, 
  { path: 'login', component: LogInComponent,
    children : [
    { path: '', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
