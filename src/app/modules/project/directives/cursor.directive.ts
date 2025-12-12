import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCursor]',
  standalone: true
})
export class CursorDirective {
  private el = inject(ElementRef);

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.cursor = 'default';
  }
}
