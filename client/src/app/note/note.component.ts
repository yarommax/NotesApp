import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/services/note.service';
import { Note } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {

  notes = [];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.fetch().subscribe(notes => this.notes = notes);
  }

  onDeletePosition(event: Event, note: Note) {
    event.stopPropagation();
    this.noteService.deleteNote(note).subscribe(
      response => {
        console.log(response);
      });
  }
}
