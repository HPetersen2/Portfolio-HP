import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage:string = "de";

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang:string):void {
    switch (lang) {
      case 'de': {
        this.currentLanguage = 'en';
        this.translate.use('en');
        break;
      }
      case 'en': {
        this.currentLanguage = 'de';
        this.translate.use('de');
        break;
      }
    }

  }

}
