import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    // Register translation languages
    translate.addLangs(['en', 'tr']);
    // Set default language
    translate.setDefaultLang('en');
  }

  ngOnInit() {}
}
