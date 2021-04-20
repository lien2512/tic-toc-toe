import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  back = false;
  formLogin: FormGroup;
  formSignUp: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formLogin = this.fb.group({
      account: ['', Validators.required],
      pass: ['', Validators.required]
    })
    this.formSignUp = this.fb.group({
      account: ['', Validators.required],
      pass: ['', Validators.required],
      repass: ['', Validators.required]
    })
  }
  closeLoginModal() {

  }

}
