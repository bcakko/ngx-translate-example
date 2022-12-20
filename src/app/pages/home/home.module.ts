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

import { HomeComponent } from './home.component';

export function createHomeTranslateLoader(http: HttpClient) {
  console.log('HomeModule translate loader works!');
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

const routes: Route[] = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
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
export class HomeModule {
  constructor(public translationService: TranslateService) {
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> HomeModule ', lang);
        this.translationService.use(lang.lang);
      }
    );
  }
}
