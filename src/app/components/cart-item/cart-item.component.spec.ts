import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CartItemComponent } from "./cart-item.component";
import { MOCK_PRODUCTS } from "../../util/mock-data/product.mock";

describe("CartItemComponent", () => {
  let fixture: ComponentFixture<CartItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CartItemComponent);
    fixture.componentInstance.item = {
      product: MOCK_PRODUCTS.products[0],
      quantity: 1,
    };
    fixture.detectChanges();
  });
  it("creates a cart item", () =>
    expect(fixture.componentInstance).toBeTruthy());
});
