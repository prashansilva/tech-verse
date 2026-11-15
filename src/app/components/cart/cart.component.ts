import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyPipe } from "../../core/pipes/product.pipes";
import { CartItem } from "../../core/models/product.model";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { MOCK_PRODUCTS } from "../../util/mock-data/product.mock";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, CurrencyPipe, CartItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  items: CartItem[] = [
    { product: MOCK_PRODUCTS.products[0], quantity: 1 },
    { product: MOCK_PRODUCTS.products[1], quantity: 1 },
    { product: MOCK_PRODUCTS.products[6], quantity: 1 },
  ];

  get subtotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  }

  get tax() {
    return this.subtotal * 0.08;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  get count() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
