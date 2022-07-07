import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  saveUser(userData:object) {
    let apiUrl = `${environment.baseUrl}create`;
    return this.http.post(apiUrl, userData);
  }

  getUserList(params:object) {
    let apiUrl = `${environment.baseUrl}getUsers`;
    return this.http.post(apiUrl, params);
  }
}
