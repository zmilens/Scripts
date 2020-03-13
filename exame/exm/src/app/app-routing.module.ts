import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddingComponent } from './adding/adding.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'add', component: AddingComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
