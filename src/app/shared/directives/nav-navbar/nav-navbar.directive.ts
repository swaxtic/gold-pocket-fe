import { Directive, HostBinding, HostListener, Input } from '@angular/core';

enum NavBarStyle {
  default = 'navbar-light bg-light shadow-sm',
  transparent = 'navbar-light bg-transparent'
}

@Directive({
  selector: '[appNavNavbar]'
})
export class NavNavbarDirective {

  navbarStyle: string = NavBarStyle.transparent;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.navbarStyle = NavBarStyle.default;
    } else {
      this.navbarStyle = NavBarStyle.transparent;
    }
  }

  @HostBinding('class')
  get applyStyles():string {
    return `navbar fixed-top navbar-expand-lg ${this.navbarStyle}`
  }

  constructor() { }

}
