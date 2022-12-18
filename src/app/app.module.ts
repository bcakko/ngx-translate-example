import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, DetailsComponent],
  imports: [BrowserModule, TranslateModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
