import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  listStudents: Student[] = [];
  
  constructor(private _studentService: StudentService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents() {
    this._studentService.getStudents().subscribe(data => {
      console.log(data);
      this.listStudents = data;
    }, error => {
      console.log(error);
    })
  }

  removeStudent(id: any) {
    this._studentService.removeStudent(id).subscribe(data => {
      this.toastr.error('The student was successfully removed' ,'Student Removed');
      this.getStudents();
    }, error => {
      console.log(error);
    })
  }

}
