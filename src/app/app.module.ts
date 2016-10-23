import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { InfoComponent } from './detail/info/info/info.component';
import { ReposComponent } from './detail/repos/repos/repos.component';
import { AvatarComponent } from './detail/avatar/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InfoComponent,
    ReposComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
