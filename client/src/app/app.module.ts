import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './shared/services/note.service';
import { AppRoutingModule } from './shared/app-routing.module';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SiteLayoutComponent,
    NoteEditorComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule { }
