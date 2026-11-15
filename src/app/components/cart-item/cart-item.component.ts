import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CurrencyPipe, ProductImagePipe } from "../../core/pipes/product.pipes";
import { CartItem } from "../../core/models/product.model";

@Component({
  selector: "app-cart-item",
  standalone: true,
  imports: [CurrencyPipe, ProductImagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.scss"],
})
export class CartItemComponent {
  @Input({ required: true }) item!: CartItem;
}
