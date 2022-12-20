import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-translate-example';

  constructor(private readonly translate: TranslateService) {
    // Set the default language
    translate.setDefaultLang('en');

    // Use the `use` method to set the active language
    translate.use('en');
  }
}
