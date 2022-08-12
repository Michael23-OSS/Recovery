import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm: FormGroup;
  title = 'Create student';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _studentService: StudentService,
              private aRouter: ActivatedRoute) { 
    this.studentForm = this.fb.group({
      id: ['', Validators.required],
      student: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  addStudent() {

    const STUDENT: Student = {
      id: this.studentForm.get('id')?.value,
      name: this.studentForm.get('student')?.value,
      lastname: this.studentForm.get('lastname')?.value,
      phone: this.studentForm.get('phone')?.value,
      email: this.studentForm.get('email')?.value,
    }

    console.log(STUDENT); 
    this._studentService.saveStudent(STUDENT).subscribe(data => {
      this.toastr.success('The student was registered successfully!', 'Registered Student!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.studentForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.title = 'Edit student';
      this._studentService.getStudent(this.id).subscribe(data => {
        this.studentForm.setValue({
          id: data.name,
          student: data.name,
          lastname: data.lastname,
          phone: data.phone,
          email: data.email,
        })
      })
    }
  }

}
