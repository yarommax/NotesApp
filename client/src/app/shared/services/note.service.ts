import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../interfaces';

@Injectable()
export class NoteService {
  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<Note[]> {
    return this.httpClient.get<Note[]>('/notes');
  }
}
