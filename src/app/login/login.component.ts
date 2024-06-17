// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {  Router } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   email: string = "";
//   password: string = "";

//   constructor(private http: HttpClient, private router: Router) {}

//   register() {
//     const newUser = {
//       email: this.email,
//       password: this.password
//     };

//     this.http.post<any>('http://localhost:3000/api/register', newUser)
//       .subscribe(response => {
//         console.log(response);
//         this.router.navigate(['/product-list']);
//       }, error => {
//         console.error(error);
//       });
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    if (this.loginForm.invalid) {
      return;
    }

    const newUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.http.post<any>('http://localhost:3000/api/register', newUser)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/product-list']);
        },
        error => {
          console.error(error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
  }
}
