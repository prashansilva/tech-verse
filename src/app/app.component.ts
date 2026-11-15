import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-home />",
})
export class AppComponent {}
