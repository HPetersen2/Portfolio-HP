import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "aboutMe": "Über mich",
      "skills": "Skills",
      "portfolio": "Portfolio"
    },
    english: {
      "aboutMe": "About me",
      "skills": "Skills",
      "portfolio": "Portfolio"
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }

}
