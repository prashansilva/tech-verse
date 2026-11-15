import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductsComponent } from "./products.component";

describe("ProductsComponent", () => {
  let fixture: ComponentFixture<ProductsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
  });
  it("creates the product collection", () =>
    expect(fixture.componentInstance).toBeTruthy());
});
