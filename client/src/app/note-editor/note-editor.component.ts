import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from '../shared/services/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})

export class NoteEditorComponent implements OnInit {

  form: FormGroup;

  constructor(private noteService: NoteService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title : new FormControl(''),
      description : new FormControl(''),
      color: new FormControl('')
    });
  }

  onSubmit() {
    console.warn(this.form.value);
  }
}
