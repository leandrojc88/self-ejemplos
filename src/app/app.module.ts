import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './basic/charizard/charizard.component';
import { HttpClientModule } from '@angular/common/http';
import { FatherComponent } from './basic/father/father.component';
import { FatherSonComponent } from './basic/father-son/father-son.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CharizardComponent,
    FatherComponent,
    FatherSonComponent,
    CounterRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
