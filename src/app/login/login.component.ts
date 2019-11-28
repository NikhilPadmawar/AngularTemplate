import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  left: boolean = true;
  right: boolean = false;
  constructor(private router: Router,private fb:FormBuilder) { }
  
  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required]
  });

  signUpForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required],
    confirmpassword:['', Validators.required]
  })
  ngOnInit() {

  }

  login(){
    console.log(this.loginForm.value);
    this.router.navigate(['/home']).then(nav => {
      console.log(nav);
    }, err => {
      console.log(err);
    });
  }

  signUp(){
    console.log(this.signUpForm.value);
  }


  goLeft() {
    this.left=true;
    this.right=false;
    this.loginForm.reset();
  }

  goRight() {
    this.right=true;
    this.left=false;
    this.signUpForm.reset();
  }

}
