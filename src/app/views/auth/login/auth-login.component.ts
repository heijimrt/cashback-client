import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { take } from 'rxjs/operators';
import { UserResponse } from './../../../core/interfaces/user-response.interface';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit(): void {
    this.authService
      .login()
      .pipe(take(1))
      .subscribe((user: UserResponse) => {
        console.log(user);
      });
  }

  /**
   * Build register form
   */
  private buildForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl(null, Validators.required),
    });
  }
}
