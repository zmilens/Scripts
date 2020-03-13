import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MotnersComponent } from './motners/motners.component';
import { AddMComponent } from './add-m/add-m.component';
import { EditMComponent } from './edit-m/edit-m.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'mothers', component: MotnersComponent},
  {path: 'add-m', component: AddMComponent},
  {path: 'edit-m/:id', component: EditMComponent},
  { path: '**', redirectTo: ''}, //автоматическое перенаправление 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
