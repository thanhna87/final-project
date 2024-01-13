import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css', '../../../../css/bootstrap.min.css'],
})
export class LoginComponent {
  loginForm: any;
  constructor(
    private dataService: AuthenticationService,
    private fb: FormBuilder,
    private router : Router)
  {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    // localStorage.removeItem('token')// luon luon mat token
    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){        
        this.router.navigate(['/home']) //chuyen sang Home khi da co token
      }else{
        this.router.navigate(['/login']) 
      }
  }

  onSubmit() {
    console.log('Call login function');
    this.dataService
      .getDataLogin(this.loginForm.value)
      .subscribe((response) => {
        console.log(response.token)
        localStorage.setItem('token', response.token)
        console.log('redirect');
        this.router.navigate(['/home']) //chuyen sang Home khi da co token
      },
      (error) => {
         alert('Incorrect information')
      }
      )
      // console.log('API finish');
      // if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
      //   console.log('redirect');
      //   this.router.navigate(['/home']) //chuyen sang Home khi da co token
      // }
  }
}
