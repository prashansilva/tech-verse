import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrencyPipe, ProductImagePipe } from "../../core/pipes/product.pipes";
import { Product } from "../../core/models/product.model";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ProductImagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Input() favoriteState = false;
  @Output() favorite = new EventEmitter<Product>();
}
