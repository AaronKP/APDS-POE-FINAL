import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!:string;

  constructor(private http:HttpClient) { }

  signup(userusername:string, userpassword:string, thename:string, usersurname:string,useremail:string){
    this.http.post('https://localhost:3000/api/users/signup',{username:userusername,password:userpassword,name:thename,surname:usersurname,email:useremail})
    .subscribe(response=>{

    });
  }

  login(userusername:string,userpassword:string)
  {
    this.http.post<{token:string}>('https://localhost:3000/api/users/login',{username:userusername,password:userpassword})
    .subscribe(response=>{
      const token =response.token;
      this.token=token;
      console.log(token)
    });
  }

  getToken(){
    return this.token;
  }
}
