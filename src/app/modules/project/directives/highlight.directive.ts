import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  private el = inject(ElementRef);

  appHighlight = input('orange');

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.color = this.appHighlight();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.color = '';
  }
}
