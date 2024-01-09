import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public authservice: AuthServiceService,private router:Router){}

  option:string =this.router.url

  ngOnInit(): void {
    
  }

  onlogin(loginform:NgForm){
    if(loginform.invalid){
      return;
      
    }
    this.authservice.login(loginform.value.enteredusername,loginform.value.enteredpassword)
    console.log(loginform.value.enteredusername,loginform.value.enteredpassword)
  }
}