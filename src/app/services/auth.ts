import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private auth:HttpClient){}

  // Bar none -> field of action is a given next
  // http://localhost:8080/api/v1/auth/login

login(): Observable<any>{
return this.auth.post('http://localhost:3000/users/login',{});
}


}
