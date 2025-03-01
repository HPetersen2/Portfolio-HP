import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public languageService: LanguageService) {}

  isBurgerMenuActive:boolean = false;

  switchBurgerMenu() {
    switch(this.isBurgerMenuActive) {
      case false:
        this.isBurgerMenuActive = true;
        break;
      case true:
        this.isBurgerMenuActive = false;
        break;
      default:
        this.isBurgerMenuActive = false;
    }
  }

}
