import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';

// componentes
import { ListStudentsComponent } from './components/list-students/list-students.component';

const routes: Routes = [
  { path: '', component: ListStudentsComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'edit-student/:id', component: CreateStudentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
