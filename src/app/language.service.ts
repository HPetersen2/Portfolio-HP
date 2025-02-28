import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage:string = "de";

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    let language:string = localStorage.getItem("currentLanguage") || "de";
    this.currentLanguage = language;
    this.translate.setDefaultLang('de');
    this.translate.use(language);
  }

  switchLanguage(lang:string):void {
    switch (lang) {
      case 'de': {
        this.currentLanguage = 'en';
        this.translate.use('en');
        localStorage.setItem("currentLanguage", "en");
        break;
      }
      case 'en': {
        this.currentLanguage = 'de';
        this.translate.use('de');
        localStorage.setItem("currentLanguage", "de");
        break;
      }
    }

  }

}
