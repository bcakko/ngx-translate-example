import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent {
  selectedLanguage: string;
  languages = ['en', 'tr'];

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.getDefaultLang();
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}
