import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FilterSidebarComponent } from "./filter-sidebar.component";

describe("FilterSidebarComponent", () => {
  let fixture: ComponentFixture<FilterSidebarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSidebarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FilterSidebarComponent);
    fixture.detectChanges();
  });
  it("creates the product filters", () =>
    expect(fixture.componentInstance).toBeTruthy());
});
