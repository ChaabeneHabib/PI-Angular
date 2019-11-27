import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { OffreComponent } from './offre/offre.component';
import { SettingsComponent } from './entreprise/settings/settings.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
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
