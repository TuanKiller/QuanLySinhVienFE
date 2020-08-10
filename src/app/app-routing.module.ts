import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student-form/:id', component: StudentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
