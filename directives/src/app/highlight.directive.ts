import { Directive, ElementRef, Renderer, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor = '#fff';
  @Input() highlightColor = 'green';

  @HostBinding('style.backgroundColor') color = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor;
  }

  // constructor(elRef: ElementRef, renderer : Renderer) {
  //   // elRef.nativeElement.style.backgroundColor = 'green';
  //   renderer.setElementStyle(elRef.nativeElement, 'background-color', 'lightgreen');
  // }
  ngOnInit(){
    this.color = this.defaultColor;
  }

}
