import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {

  public form: FormGroup;
  public items: Array<SelectItem> = [];
  public wallet: Array<any> = [];

  constructor(private readonly ordersService: OrdersService) {}

  ngOnInit() {
    this.receiveProducts();
    this.buildForm();
  }

  public onSubmit(value) {
    this.wallet.push(value);
    this.form.reset();
  }

  private receiveProducts(): void {
    this.ordersService
      .getAll()
      .pipe(take(1))
      .subscribe(
        (products) => {
          console.log(products);
          this.items = products.data.map(product => {
            return {
              label: product.label,
              value: product.label
            }
          });
        });
  }

  private buildForm(): void {
    this.form = new FormGroup({
      product: new FormControl(null),
      value: new FormControl(null)
    });
  }
}
