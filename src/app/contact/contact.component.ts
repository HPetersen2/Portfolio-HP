import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, NgClass, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  accept:boolean = false;
  touchedAccept:boolean = false;

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
      this.touchedAccept = true;
    }
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted && this.accept) {
      console.log(this.contactData);
      this.accept = false;
      this.touchedAccept = false;
      ngForm.reset();
    }
  }

}
