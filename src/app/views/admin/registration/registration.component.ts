import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  usersList: any;

  constructor(
    private fb: FormBuilder,
    private usersService : UsersService,
    private router :Router
    ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      dob: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    this.usersService.saveUser(this.registrationForm.value).subscribe((res:any)=>{
      if (res.status == 200) {
        this.router.navigate(['/users']);
      }
      this.registrationForm.reset();
    });
  }

}
