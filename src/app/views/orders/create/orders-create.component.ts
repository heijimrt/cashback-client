import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { OrdersService } from '../services/orders.service';
import { SumPipe } from 'src/app/core/pipes/sum.pipe';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {

  public form: FormGroup;
  public items: Array<SelectItem> = [];
  public wallet: Array<any> = [];
  private currencySetup = { prefix: 'R$ ', thousands: '.', decimal: ',' };

  constructor(
    private readonly ordersService: OrdersService,
    private readonly sumPipe: SumPipe
  ) {}

  ngOnInit() {
    this.receiveProducts();
    this.buildForm();
  }

  public walletSum() {
    return this.sumPipe.transform(this.wallet, '');
  }

  public addWallet(value) {
    this.wallet.push(value);
    this.form.reset();
  }

  public submitOrder(): void {
    const value: number = this.sumPipe.transform(this.wallet, 'value');
    console.log(value);
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
            };
          });
        });
  }

  /**
   * Build reactive form
   */
  private buildForm(): void {
    this.form = new FormGroup({
      product: new FormControl(null),
      value: new FormControl(null)
    });
  }
}
