import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {

  noteEditorForm = new FormGroup({
    title : new FormControl(''),
    description : new FormControl(''),
    date : new FormControl(new Date()),
    color: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.noteEditorForm.value);
  }
}
