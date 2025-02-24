import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "headline": "Über mich",
      "intro": "Die IT hat mich schon als Kind fasziniert. Sowohl in meiner Ausbildung als auch während meines Studiums habe ich schon früh begonnen, Prozesse zu automatisieren und mein großes Interesse an der IT weiter zu vertiefen.",
      "location": "Ich wohne im Solling im Landkreis Northeim und fühle mich dort sehr wohl.",
      "learn": "Ich bin immer offen für neue Technologien, und neue Dinge zu lernen ist fast schon ein Hobby von mir.",
      "skills": "Meine analytischen Fähigkeiten haben mich immer vorangebracht. Für mich sind Fehler eine Chance, aus ihnen zu lernen und mich ständig zu verbessern."
    },
    english: {
      "headline": "About me",
      "intro": "IT has fascinated me since I was a child. Both in my apprenticeship and during my studies, I started automating processes early on and further deepened my great interest in IT.",
      "location": "I live in Solling in the district of Northeim and feel very much at home there.",
      "learn": "I am always open to new technologies and learning new things is almost a hobby of mine.",
      "skills": "My analytical skills have always helped me to progress. For me, mistakes are an opportunity to learn from them and continuously improve."
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }

}
