import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    color: String,
});
