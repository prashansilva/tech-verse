import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductCardComponent } from "./product-card.component";
import { MOCK_PRODUCTS } from "../../util/mock-data/product.mock";

describe("ProductCardComponent", () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = MOCK_PRODUCTS.products[0];
    fixture.detectChanges();
  });

  it("creates a product card from the mock product model", () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain(
      "TechVerse ANC Headphones",
    );
  });
});
