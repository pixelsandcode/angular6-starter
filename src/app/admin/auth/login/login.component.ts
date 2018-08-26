import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
export class LoginComponent implements OnInit {
  hasError = false;
  isLoading = false;
  loginForm;
  email = new FormControl('admin@chooze.ir', [Validators.email]);
  password = new FormControl('ch00ze2018', [Validators.required]);
  remember = new FormControl(false);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    // this.formBuilder = formBuilder;
    // this.router = router;
    // this.route = route;
    // this.authService = authService;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      remember: this.remember,
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.onAdminLogin(this.loginForm.value).subscribe(
        () => {
          this.hasError = false;
          this.router.navigate(['/admin/constants']);
        },
        () => {
          this.hasError = true;
          this.isLoading = false;
        },
      );
    }
  }
}
