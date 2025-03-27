import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPreventWheel]',
  standalone: true,
})
export class PreventWheelDirective  {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Use HostListener to only handle user inputs
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value.length > 0) {
      // Custom validation or logic can go here if necessary
    }
  }
}
