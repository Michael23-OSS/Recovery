import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://34.173.169.144:4000/api/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.url);
  }

  removeStudent(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveStudent(student: Student): Observable<any> {
    return this.http.post(this.url, student);
  }

  getStudent(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
