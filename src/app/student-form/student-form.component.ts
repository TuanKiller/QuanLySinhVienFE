import { StudentAdd } from './../models/student-add';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Student } from '../models/Student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  public id = 0;

  public studentForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });


  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id) {
    this.serverHttp.getStudent(id).subscribe((data) => {
      console.log('getStudent', data);
      for (const controlName in this.studentForm.controls) {
        if (controlName) {
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  private EditData() {
    const newStudent = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Student;
  }
  private CreateNewData() {
    const student: StudentAdd = {
      code: this.studentForm.get('code')?.value,
      firstName: this.studentForm.get('firstName')?.value,
      lastName: this.studentForm.get('lastName')?.value,
      gender: this.studentForm.get('gender')?.value,
      email: this.studentForm.get('email')?.value,
      phone: this.studentForm.get('phone')?.value,
    }
    return student as StudentAdd;
  }



  public saveAndGotoList() {
    if (this.id > 0) {
      this.serverHttp.updateStudent(this.EditData()).subscribe((data) => {
        this.router.navigate(['']);
      });
    } else {
      this.serverHttp.addStudent(this.CreateNewData()).subscribe((data) => {
        this.router.navigate(['']);
      });
    }
  }

  public save() {
    if (this.id > 0) {
      this.serverHttp.updateStudent(this.EditData())
        .subscribe((data) => {
          //
        });
    } else {
      this.serverHttp.addStudent(this.CreateNewData()).subscribe((data) => {
        this.common.increamentStudent();
        this.studentForm.reset();
      });
    }
  }
}
