import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../interfaces';

@Injectable()
export class NoteService {
  notesUrl = 'api/notes';
  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<Note[]> {
    return this.httpClient.get<Note[]>('api/notes');
  }

  createNote(body): Observable<Note> {
    return this.httpClient.post<Note>('api/notes', body);
  }

  deleteNote(note) {
    const url = `${this.notesUrl}/${note._id}`;
    return this.httpClient.delete(url);
  }
}
