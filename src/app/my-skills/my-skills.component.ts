import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  constructor(private languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "headline": "Meine Skills",
      "technologies": "Mit diesen Frontendtechnologien, kenne ich mich bereits sehr gut aus.",
      "looking": "Auf der Suche nach ",
      "another-skill": "einem anderen Skill",
      "new-technology": "Sehr gerne arbeite ich mich in eine weitere Technologie ein, um weiter zu verbessern.",
      "continually-learning": "Kontiunierliches Lernen",
      "contact": "Kontakt aufnehmen"
    },
    english: {
      "headline": "My skills",
      "technologies": "I am already very familiar with these front-end technologies.",
      "looking": "Looking for",
      "another-skill": "another skill",
      "new-technology": "I am very happy to familiarize myself with another technology in order to improve it further.",
      "continually-learning": "Continually learning",
      "contact": "Get in touch"
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }
}
