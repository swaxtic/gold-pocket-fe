import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from 'src/app/template/components/header/header.component';
import { NavNavbarDirective } from './nav-navbar.directive';

describe('NavNavbarDirective', () => {
  //TODO: check https://codecraft.tv/courses/angular/unit-testing/directives/
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavNavbarDirective]
    });
  });

  it('should create an instance', () => {
    const directive = new NavNavbarDirective();
    expect(directive).toBeTruthy();
  });

  it('should show style onScroll', ()=> {
    const directive = new NavNavbarDirective();
    // window.pageYOffset
    // window.pageYOffset = 40
    directive.navbarStyle = NavBarStyle.onScroll
    expect(directive.navbarStyle).toBe(NavBarStyle.onScroll)
  })

  it('should show transparent style at init', ()=> {
    const directive = new NavNavbarDirective();
    directive.onWindowScroll()
    expect(directive.navbarStyle).toBe(NavBarStyle.transparent)
  })



});

enum NavBarStyle {
  onScroll = 'navbar-light bg-light shadow-sm show',
  transparent = 'navbar-light bg-light shadow-sm'
}
