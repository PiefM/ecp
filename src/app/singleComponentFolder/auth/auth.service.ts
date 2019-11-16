import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  url = 'http://localhost:8080';
  connect(data) {
    this.http.post(`${this.url}/connection`, data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
        }
      );
  }
  getConnect() {
    return this
      .http
      .get(`${this.url}/connection`);
  }
}