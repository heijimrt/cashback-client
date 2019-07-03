import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpAuthService } from 'src/app/core/services/http/http-auth.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private http: HttpAuthService) {}

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
        .post('users', value)
        .subscribe(
          (data) => console.log(data));
  }
}
