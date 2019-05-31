import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../shared/services/note.service';
import { Router } from '@angular/router';
import { Note } from '../shared/interfaces';
import { validate } from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css'],
})

export class NoteEditorComponent implements OnInit {

  form: FormGroup;
  colors = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];
  chosedColor = null;
  alert = false;
  alertMessage = '';

  constructor(private noteService: NoteService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
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
        this.showAlert('Note created');
      },
      error => {
        this.showAlert(error.error.message);
      },
      this.form.enable()
    );
  }

  showAlert(message: string) {
    this.alertMessage = message;
    this.alert = true;
    setTimeout( () => {
      if (this.alert) {
        this.alert = false;
      }
    }, 1000);
  }
}
