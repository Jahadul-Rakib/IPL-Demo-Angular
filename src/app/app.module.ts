import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';

import { PageNotFoundComponentComponentComponent } from './Common/page-not-found-component-component/page-not-found-component-component.component';
import { DataService } from './Service/data.service';
import { AddPlayerComponent } from './Component/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponentComponentComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
