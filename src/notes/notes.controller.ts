import { Controller, Get, Post, Param, Delete, Body, HttpCode, Put, Res } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/notes.interface';

@Controller('api/notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get('')
    getNotes() {
        return this.notesService.getAll();
    }

    @Get(':id')
    getNoteById(@Param('id') id) {
        return this.notesService.getById(id);
    }

    @Post()
    async createNote(@Body() createNoteDto: CreateNoteDto, @Res() res) {
        const newNote = this.notesService.create(createNoteDto);
        return res.sendStatus(201);
    }

    @Put(':id')
    updateNote(@Param('id') id, @Body() updateNoteDto: CreateNoteDto) {
        return 'update note';
    }

    @Delete(':id')
    deleteNote(@Param('id') id) {
        this.notesService.delete(id);
    }

}
