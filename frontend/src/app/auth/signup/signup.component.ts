import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authservice: AuthServiceService) { }

  ngOnInit(): void {}

  onsignup(signupForm: NgForm) {
    // if (signupForm.invalid) {
    //   return;
    // }
    console.log(
      signupForm.value.enteredusername,
      signupForm.value.enteredpassword,
      signupForm.value.enteredname,
      signupForm.value.enteredsurname,
      signupForm.value.enteredemail
    );

    this.authservice.signup(
      signupForm.value.enteredusername,
      signupForm.value.enteredpassword,
      signupForm.value.enteredname,
      signupForm.value.enteredsurname,
      signupForm.value.enteredemail
    );
   
  }
}