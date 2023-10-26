import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ConfigurationComponent,
    HeaderComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
