import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { NoteComponent } from '../note/note.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent,
      children: [
        {path: '', redirectTo: '/notes', pathMatch: 'full'},
        {path: 'notes', component: NoteComponent},
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
