import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage:string = "german";

  switchLanguage(language:string) {
    if(language == "german") {
      this.currentLanguage = "english";
    } else if(language == "english") {
      this.currentLanguage = "german";
    }
  }

  constructor() {

  }
}
