import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[greyTag]'
})
export class GreyTagDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
      this.renderer.addClass(this.el.nativeElement.querySelector('strong'), 'govuk-tag--grey');
  }

}
