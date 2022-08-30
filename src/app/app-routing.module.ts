import { NgModule} from '@angular/core';
import  {Routes ,RouterModule} from '@angular/router';
import { PlayerComponentComponent } from './player-component/player-component.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ShowComponent} from './show/show.component';
import { AuthGuard } from './auth.guard';


const routes:Routes =[
{path:"" ,redirectTo:'/home' ,pathMatch:"full"},	
{path:'home' ,component: ShowComponent},
{path: 'create' , component : PlayerComponentComponent},
{path :'player' , component:PlayerListComponent , canActivate:[AuthGuard]},
{path: 'register' , component : RegisterComponent},
{path: 'login' , component :LoginComponent }

];


@NgModule({

	imports : [RouterModule.forRoot(routes)],
	exports : [RouterModule]
})
export class AppRoutingModule{}

export const  RoutingComponent =[PlayerComponentComponent];