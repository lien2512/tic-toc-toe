import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  public emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  back = false;
  formLogin: FormGroup;
  formSignUp: FormGroup;
  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
    private toastr: ToastrService,
    private apiService: ApiService,
    private router: Router,
    private cookie: CookieService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formLogin = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.formSignUp = this.fb.group({
      email: ['email', [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repass: ['', Validators.required],
    }, 
    {
      validators: [this.checkConfirmPassword]
    })
  }
  checkConfirmPassword(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('repass').value;

    return password === confirmPassword ? true : { invalidConfirmPassword: true };
  }
  closeLoginModal() {

  }
  login() {
    this.helperService.markFormGroupTouched(this.formLogin)
    if (this.formLogin.invalid) {
      return false;
    } else {
      this.apiService.login(this.formLogin.value).subscribe((res:any) => {
        if (res.httpCode == '200') {
          this.loginSuccess(res)
          this.router.navigate(['']);
        } else if(res.httpCode == '500'){
          alert("Tài khoản chưa tồn tại")
        }
      }, (err) => {
        alert("Đăng nhập thất bại !")
      })
     
    }
    
  }
  signUp() {
    debugger;
    this.helperService.markFormGroupTouched(this.formSignUp);
    if (this.formSignUp.invalid) {
      return false
    } else {
      let data = {
        userName: this.formSignUp.get('userName').value,
        email: this.formSignUp.get('email').value,
        password: this.formSignUp.get('password').value
      }
      this.apiService.signUp(data).subscribe(() => {
        
      })
    }
  }
  loginSuccess(res) {
    const userInfo = res.player;
    localStorage.setItem('user_info', JSON.stringify({
      data: userInfo
    }));
    this.cookie.set('user_info', JSON.stringify(userInfo), 365, '/');
    this.closeLoginModal();
    setTimeout(() => {
      this.subjectService.userInfo.next(userInfo);
    }, 200);
  }

}
