import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService } from './api.service';

import { PanelModule } from 'primeng/panel';
import {ChartModule} from 'primeng/chart';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    ChartModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
