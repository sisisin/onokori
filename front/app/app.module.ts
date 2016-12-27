import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SellComponent } from './sell/sell.component';
import { TwitterComponent } from './twitter/twitter.component';
import { InviteComponent } from './invite/invite.component';
import { SummaryComponent } from './summary/summary.component';

import { CopyStoreService } from './services/copy.store.service';

@NgModule({
  declarations: [
    AppComponent,
    SellComponent,
    TwitterComponent,
    InviteComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CopyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
