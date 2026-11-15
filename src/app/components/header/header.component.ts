import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() cartToggle = new EventEmitter<void>();
  @Output() menuToggle = new EventEmitter<void>();
  cartCount = 0;
  search = "";
}
