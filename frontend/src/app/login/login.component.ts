import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router) 
    {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/login', this.loginForm.value)
        .subscribe(
          (response) => {
            console.log('Login successful', response);
            this.errorMessage = null;
            // localStorage.setItem('token', response.token);
            this.router.navigate(['/']);
            // Handle successful login (e.g., save token, redirect, etc.)
          },
          (error) => {
            console.error('Login error', error);
            this.errorMessage = error
            // Handle error (e.g., show error message)
          }
        );
    }
  }
}
