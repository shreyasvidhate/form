import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallTicketComponent } from './components/hall-ticket/hall-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'hall-ticket',component:HallTicketComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }