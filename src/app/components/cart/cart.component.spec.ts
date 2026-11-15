import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";

describe("CartComponent", () => {
  let fixture: ComponentFixture<CartComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
  });
  it("creates the cart section", () =>
    expect(fixture.componentInstance).toBeTruthy());
});
