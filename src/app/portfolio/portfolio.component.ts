import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private languageService: LanguageService) {}


}
