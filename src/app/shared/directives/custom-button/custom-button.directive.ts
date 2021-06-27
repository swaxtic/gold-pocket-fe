import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

enum ButtonStyle {
  default = 'btn',
  outline = 'btn btn-outline',
  link = 'btn btn-link'
}

enum ButtonSize {
  default = '',
  small = 'btn-sm',
  large = 'btn-lg'
}

//TODO: set color dynamically
enum ButtonColor {
  blue = ''
}

@Directive({
  selector: '[CustomButton]'
})
export class CustomButtonDirective {

  @Input() color: string = 'var(--secondary-blue-color)';
  @Input() buttonStyle: 'default' | 'outline' | 'link' = 'default';
  @Input() size: 'default' | 'small' | 'large' = 'default';
  backgroundColor = this.el.nativeElement.style.backgroundColor;
  textColor = this.el.nativeElement.style.color;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--main-blue-color)');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }
  @HostBinding('style.background-color') get bgColor() {
    return this.color;
  }

  @HostBinding('class')
  get applyStyle(): string {
    const defaultStyle: ButtonStyle = ButtonStyle[this.buttonStyle];
    const defaultSize: ButtonSize = ButtonSize[this.size];
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    return `${defaultStyle} ${defaultSize}`
  }

}
