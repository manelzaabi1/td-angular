import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(el: HTMLElement) {
    el.classList.add('highlight');
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(el: HTMLElement) {
    el.classList.remove('highlight');
  }
}
