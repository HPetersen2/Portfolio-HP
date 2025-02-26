import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private languageService: LanguageService) {}

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
