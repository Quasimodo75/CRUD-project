import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  router: any;
  constructor(private userService: UserService,  ) {}

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });
  ngOnInit() {
    
  }

  register() {
    this.userService.register(this.form.value).subscribe((data) => {
      console.log(data);

      this.router.navigate(['/login']);
    });
  }
}
