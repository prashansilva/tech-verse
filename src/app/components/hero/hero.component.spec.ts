import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe("HeroComponent", () => {
  let fixture: ComponentFixture<HeroComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
  });
  it("creates the launch hero", () =>
    expect(fixture.componentInstance).toBeTruthy());
});
