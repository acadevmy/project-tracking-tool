import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.textDecoration = 'none';
  }
}
