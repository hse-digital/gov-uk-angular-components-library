import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[noMarginHint]'
})
export class NoMarginHintDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
      this.renderer.addClass(this.el.nativeElement.querySelector('p'), 'no-margin');
  }
}
