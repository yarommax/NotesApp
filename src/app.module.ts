import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NotesModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
