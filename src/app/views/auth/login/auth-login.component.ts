import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { take } from 'rxjs/operators';
import { UserResponse } from './../../../core/interfaces/user-response.interface';
import { User } from 'src/app/core/model/user';
import { TokenService } from 'src/app/core/services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Submit login data
   *
   * @param data {User}
   */
  public onSubmit(data: User): void {
    this.authService
      .login(data)
      .pipe(take(1))
      .subscribe((user: UserResponse) => {
        const valid: boolean = this.tokenService.hasRequestedToken(user);
        if (valid) {
          this.tokenService.saveToken(user.token);
          this.router.navigate(['orders']);
        }
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
