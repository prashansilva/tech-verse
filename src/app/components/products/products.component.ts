import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Product } from "../../core/models/product.model";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Input() categories: string[] = [];
  @Input() selectedCategory = "All Products";
  @Input() sort = "Newest";
  @Input() showAll = false;
  @Input() favorites = new Set<number>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() favorite = new EventEmitter<Product>();
  @Output() loadMore = new EventEmitter<void>();
}
