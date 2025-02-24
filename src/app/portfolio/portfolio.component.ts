import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "intro": "Entdecken Sie hier meine Projekte, um sich ein Bild von meinen Fähigkeiten zu verschaffen.",
      "join": "Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
      "pollo-loco": "Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.",
      "test": "Testen"
    },
    english: {
      "intro": "Discover my projects here to get an idea of my skills.",
      "join": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      "pollo-loco": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      "test": "Live test"
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }

}
