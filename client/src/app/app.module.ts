import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './shared/services/note.service';
import { AppRoutingModule } from './shared/app-routing.module';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SiteLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
