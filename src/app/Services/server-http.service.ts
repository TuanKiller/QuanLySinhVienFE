import { StudentAdd } from './../models/student-add';
import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
      // Authorization: 'Basic ' + btoa('username:password'),
    }),
  };
  private REST_API_SERVER = 'http://localhost:64271/api';
  constructor(private httpClient: HttpClient) {}

  public getStudents() {
    const url = `${this.REST_API_SERVER}/student`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/student/`+studentId;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addStudent(data: StudentAdd) {
    const url = `${this.REST_API_SERVER}/student`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateStudent( data: Student) {
    const url = `${this.REST_API_SERVER}/student`;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteStudent(studentId: number) {
    const url = `${this.REST_API_SERVER}/student/`+studentId;
    return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
