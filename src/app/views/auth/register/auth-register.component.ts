import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpAuthService } from 'src/app/core/services/http/http-auth.service';
import { TokenService } from './../../../core/services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly http: HttpAuthService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Build register form
   */
  private buildForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      surName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.max(11)
      ]))
    });
  }

  /**
   * Submit form
   *
   * @param value
   */
  public onSubmit(value): void {
    this.http
        .post('auth/register', { data: value })
        .subscribe(
          (data: any) => {
            const response = data.body;
            const valid: boolean = this.tokenService.hasRequestedToken(response);
            if (valid) {
              this.tokenService.saveToken(response.token);
              this.router.navigate(['orders']);
            }
          });
  }
}
