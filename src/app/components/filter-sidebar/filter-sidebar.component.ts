import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-filter-sidebar",
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./filter-sidebar.component.html",
  styleUrls: ["./filter-sidebar.component.scss"],
})
export class FilterSidebarComponent {
  @Input() categories: string[] = [];
  @Input() brands: string[] = [];
  @Input() features: string[] = [];
  @Input() selectedCategory = "All Products";
  @Input() maxPrice = 2000;
  @Output() categoryChange = new EventEmitter<string>();
  @Output() maxPriceChange = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();
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
