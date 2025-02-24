import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "legalnotice": "Rechtliche Hinweise",
    },
    english: {
      "legalnotice": "Legal Notice",
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

}
