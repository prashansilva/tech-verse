import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyPipe } from "../../core/pipes/product.pipes";
import { CartItem } from "../../core/models/product.model";
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, CurrencyPipe, CartItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {

  @Input() open = true;
  @Output() close = new EventEmitter<void>();

  items: CartItem[] = [];
  subtotal = 0;
  tax = 0;
  total = 0;

  get count() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
