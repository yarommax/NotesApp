import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { NoteEditorComponent } from '../note-editor/note-editor.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent,
      children: [
        {path: '', redirectTo: '/notes', pathMatch: 'full'},
        {path: 'notes', component: NoteComponent},
        {path: 'newnote', component: NoteEditorComponent},
      ]
  }
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
