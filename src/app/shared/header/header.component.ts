import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public languageService: LanguageService) {}

}
