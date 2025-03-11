import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { NgClass } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, NgClass, NgStyle, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public languageService: LanguageService, private renderer: Renderer2) {}

  isBurgerMenuActive:boolean = false;

  switchBurgerMenu() {
    switch(this.isBurgerMenuActive) {
      case false:
        this.isBurgerMenuActive = true;
        this.renderer.addClass(document.body, 'no-scroll');
        break;
      case true:
        this.isBurgerMenuActive = false;
        this.renderer.removeClass(document.body, 'no-scroll');
        break;
      default:
        this.isBurgerMenuActive = false;
        this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  deactiveBurgerMenu() {
    this.isBurgerMenuActive = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }

}
