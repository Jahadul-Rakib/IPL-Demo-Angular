import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { PageNotFoundComponentComponentComponent } from './Common/page-not-found-component-component/page-not-found-component-component.component';
import { AddPlayerComponent } from './Component/add-player/add-player.component';


const routes: Routes = [    
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'addPlayer', component: AddPlayerComponent},
{ path: '**', component: PageNotFoundComponentComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
