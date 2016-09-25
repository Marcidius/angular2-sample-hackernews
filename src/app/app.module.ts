import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';

import { HackerNewsAPIService } from './hackernews-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HackerNewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// to get the angular cli to work without throwing errors in Webstorm:
// 1. remove "lib": ["es6, dom"] from tsconfig
// 2. installed @types - "npm install --save-dev @types/core-js
// 3. add "declare var require: any;" to typings.d.ts
// 4. add "typescript_tsdk": "/usr/local/lib/node_modules/typescript/lib", to tsconfig