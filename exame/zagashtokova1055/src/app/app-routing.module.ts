import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StudentsComponent } from './students/students.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  { path: '**', redirectTo: ''}, //автоматическое перенаправление 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
