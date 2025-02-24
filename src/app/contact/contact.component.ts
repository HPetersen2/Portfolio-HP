import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private languageService: LanguageService) {}

  texts: { [key: string]: { [key: string]: string } } = {
    german: {
      "headline": "Kontakt",
      "intro": "Neue Idee oder ein Problem zu lösen?",
      "request-contact": "Nehmen Sie gerne unverbindlich zu mir Kontakt auf.",
      "new-contact": "Ich freue mich auf Ihre Nachricht!",
      "name-field": "Dein Name",
      "email-field": "Deine E-Mail",
      "message-field": "Deine Nachricht",
      "acceptdata": "Ich habe die",
      "privacy": "Datenschutzbestimmungen",
      "acceptdata2": "gelesen und stimme der Verarbeitung meiner Daten zu.",
      "send": "Senden :)"
    },
    english: {
      "headline": "Contact",
      "intro": "New idea or problem to solve?",
      "request-contact": "Feel free to contact me without obligation.",
      "new-contact": "I look forward to hearing from you!",
      "name-field": "Your name",
      "email-field": "Your email",
      "message-field": "Your message",
      "acceptdata": "I've read the",
      "privacy": "privacy policy",
      "acceptdata2": "agree to the processing of my data as outlined.",
      "send": "Send message :)"
    }
  }

  getText(key:string) {
    return this.texts[this.languageService.currentLanguage][key];
  }


  accept:boolean = false;
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  changeStatusPolicy() {
    if(this.accept) {
      this.accept = false;
    } else if (!this.accept) {
      this.accept = true;
    }
  }

  onSubmit() {
    console.log(this.contactData)
  }

}
