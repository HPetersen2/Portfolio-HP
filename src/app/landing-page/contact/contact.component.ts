import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, NgClass, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  accept:boolean = false;
  touchedAccept:boolean = false;
  send:boolean = false;

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

  mailTest = false;

  post = {
    endPoint: 'https://henrik-petersen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.accept) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.accept = false;
            this.touchedAccept = false;
            this.send = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.accept) {
        this.accept = false;
        this.touchedAccept = false;
        ngForm.resetForm();
    }
  }

}
