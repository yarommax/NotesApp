import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { NoteEditorComponent } from '../note-editor/note-editor.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
      children: [
        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'register', component: RegistrationPageComponent},
      ],
  },
  {
    path: '', component: SiteLayoutComponent,
      children: [
        {path: 'notes', component: NoteComponent},
        {path: 'newnote', component: NoteEditorComponent},
      ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
