import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({ selector: "[appGlow]", standalone: true })
export class GlowDirective {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}
  @HostListener("mouseenter") enter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "transform",
      "translateY(-4px)",
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      "box-shadow",
      "0 16px 28px rgba(90, 40, 210, .14)",
    );
  }
  @HostListener("mouseleave") leave() {
    this.renderer.removeStyle(this.el.nativeElement, "transform");
    this.renderer.removeStyle(this.el.nativeElement, "box-shadow");
  }
}
