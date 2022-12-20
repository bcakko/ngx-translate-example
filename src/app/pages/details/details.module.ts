import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { RouterModule, Route } from '@angular/router';

import { DetailsComponent } from './details.component';

export function createHomeTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/details/', '.json');
}

const routes: Route[] = [{ path: '', component: DetailsComponent }];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createHomeTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    RouterModule.forChild(routes),
  ],
})
export class DetailsModule {
  constructor(public translationService: TranslateService) {
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> DetailsModule ', lang);
        this.translationService.use(lang.lang);
      }
    );
  }
}
