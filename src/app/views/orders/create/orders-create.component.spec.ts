import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { OrdersCreateComponent } from './orders-create.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { NgxCurrencyModule } from 'ngx-currency';
import { CustomPipesModule } from 'src/app/core/pipes/custom-pipes.module';

describe('OrdersCreateComponent', () => {
  let component: OrdersCreateComponent;
  let fixture: ComponentFixture<OrdersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCreateComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        DropdownModule,
        InputTextModule,
        NgxCurrencyModule,
        CustomPipesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
