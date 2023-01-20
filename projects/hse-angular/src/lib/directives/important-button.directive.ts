import { AfterViewInit, Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[important-button]'
})
export class ImportantButtonDirective implements AfterViewInit {
  
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngAfterViewInit(): void {
        this.renderer.addClass(this.el.nativeElement.querySelector('a'), 'govuk-button--start');
    }

}