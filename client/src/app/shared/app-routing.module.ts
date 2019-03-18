import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { NoteComponent } from '../note/note.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: 'notes', component: NoteComponent}
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
