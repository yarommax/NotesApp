import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteService } from '../shared/services/note.service';
import { Router } from '@angular/router';
import { Note } from '../shared/interfaces';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css'],
})

export class NoteEditorComponent implements OnInit {

  form: FormGroup;
  colors = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];
  chosedColor = null;

  constructor(private noteService: NoteService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title : new FormControl(''),
      description : new FormControl(''),
      color: new FormControl(''),
    });
  }

  chooseColor(event, color) {
    event.stopPropagation();
    this.chosedColor = color;
  }
  onSubmit() {
    this.form.disable();
    let obs$;

    const body: Note = {
      title: this.form.value.title,
      description: this.form.value.description,
      color: this.chosedColor,
    };

    obs$ = this.noteService.createNote(body);

    obs$.subscribe(
      note => {
        this.form.reset();
        console.log('created');
      },
      error => {
        console.log(error);
      },
      this.form.enable()
    );
  }
}
