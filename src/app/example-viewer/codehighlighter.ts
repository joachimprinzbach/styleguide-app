import {AfterViewInit, Directive, ElementRef} from '@angular/core';

declare var Prism: any;

@Directive({
	selector: '[appCode]'
})
export class CodeHighlighterDirective implements AfterViewInit {

	constructor(public el: ElementRef) {
	}

	ngAfterViewInit() {
		Prism.highlightElement(this.el.nativeElement);
	}
}


