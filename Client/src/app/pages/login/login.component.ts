import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  submitted: boolean | undefined;

  constructor(private userService: UserService, private router: Router) {}


  onSubmit() {
    const password = this.form.value.password;
    const email = this.form.value.email;

    if (this.form.status == "VALID") {
      this.userService.signIn({ password, email}).subscribe(
      (Login) => {
        this.form.reset();
        this.router.navigate(['/home']);
      }
      )
    }
  }
}
