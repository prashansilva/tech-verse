import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Product } from "../../core/models/product.model";
import { MOCK_PRODUCTS } from "../../util/mock-data/product.mock";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { FilterSidebarComponent } from "../../components/filter-sidebar/filter-sidebar.component";
import { ProductsComponent } from "../../components/products/products.component";
import { CartComponent } from "../../components/cart/cart.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FilterSidebarComponent,
    ProductsComponent,
    CartComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  searchTerm = "";
  selectedCategory = "All Products";
  maxPrice = 2000;
  sort = "Newest";
  mobileOpen = false;
  showAll = false;
  favorites = new Set<number>();
  categories = [
    "All Products",
    "Headphones",
    "Smartwatches",
    "Laptops",
    "Smart Home",
    "Cameras",
    "Gaming",
    "Accessories",
  ];
  brands = ["Apple", "Samsung", "Sony", "Logitech", "Anker"];
  features = [
    "Wireless",
    "Noise Cancellation",
    "Smart Home Compatible",
    "4K / UHD",
    "Quick Charge",
  ];
  products: Product[] = MOCK_PRODUCTS.products;
  constructor() {}
  get filteredProducts() {
    const term = this.searchTerm.toLowerCase();
    let items = this.products.filter(
      (p) =>
        (this.selectedCategory === "All Products" ||
          p.category === this.categoryKey(this.selectedCategory)) &&
        p.price <= this.maxPrice &&
        (!term || p.name.toLowerCase().includes(term)),
    );
    if (this.sort.includes("Low"))
      items = [...items].sort((a, b) => a.price - b.price);
    if (this.sort.includes("High"))
      items = [...items].sort((a, b) => b.price - a.price);
    return items;
  }
  get visibleProducts() {
    return this.showAll
      ? this.filteredProducts
      : this.filteredProducts.slice(0, 8);
  }
  categoryKey(category: string) {
    return category.toLowerCase().replace(" ", "-");
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.showAll = false;
  }
  resetFilters() {
    this.selectedCategory = "All Products";
    this.maxPrice = 2000;
    this.searchTerm = "";
  }
  toggleFavorite(p: Product) {
    this.favorites.has(p.id)
      ? this.favorites.delete(p.id)
      : this.favorites.add(p.id);
    this.favorites = new Set(this.favorites);
  }
  isFavorite(p: Product) {
    return this.favorites.has(p.id);
  }
  categoryCount(c: string) {
    return (
      (
        {
          Headphones: 342,
          Smartwatches: 286,
          Laptops: 318,
          "Smart Home": 403,
          Cameras: 297,
          Gaming: 271,
          Accessories: 564,
        } as Record<string, number>
      )[c] || 0
    );
  }
  brandCount(b: string) {
    return (
      (
        {
          Apple: 286,
          Samsung: 312,
          Sony: 148,
          Logitech: 133,
          Anker: 209,
        } as Record<string, number>
      )[b] || 0
    );
  }
  featureCount(f: string) {
    return (
      (
        {
          Wireless: 1564,
          "Noise Cancellation": 428,
          "Smart Home Compatible": 403,
          "4K / UHD": 276,
          "Quick Charge": 621,
        } as Record<string, number>
      )[f] || 0
    );
  }
}
