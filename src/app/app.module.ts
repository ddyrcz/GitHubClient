import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './detail/info/info.component';
import { ReposComponent } from './detail/repos/repos.component';
import { AvatarComponent } from './detail/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InfoComponent,
    ReposComponent,
    AvatarComponent,
    PolymerElement('paper-input'),
    PolymerElement('paper-card'),
    PolymerElement('paper-listbox'),
    PolymerElement('paper-item')
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
