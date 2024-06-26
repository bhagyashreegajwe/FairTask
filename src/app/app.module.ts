import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { FairsCardsComponent } from './shared/components/fairs-cards/fairs-cards.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashboardComponent,
    FairsCardsComponent,
    FairsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
