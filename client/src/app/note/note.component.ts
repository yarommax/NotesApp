import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/services/note.service';
import { Note } from '../shared/interfaces';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {

  notes: Note[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.fetch().subscribe(notes => {
      this.notes = notes;
    });
  }

  onDeletePosition(event: Event, note: Note) {
    event.stopPropagation();
    this.noteService.deleteNote(note).subscribe(
      response => {
        const index = this.notes.findIndex(item => item._id === note._id);
        this.notes.splice(index, 1);
      });
  }
}
