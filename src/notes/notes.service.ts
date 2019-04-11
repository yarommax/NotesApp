import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/notes.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

    async create(createNoteDto: CreateNoteDto): Promise<Note> {
        const newNote = new this.noteModel(createNoteDto);
        return await newNote.save();
    }

    async getAll() {
        return await this.noteModel.find().exec();
    }

    async getById(id: number) {
        return await this.noteModel.findById(id);
    }

    async delete(id) {
        return await this.noteModel.remove({_id: id});
    }
}
