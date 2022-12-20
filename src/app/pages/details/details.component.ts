import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.store.currentLang);
  }
}
