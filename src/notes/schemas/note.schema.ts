import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    color: { type: String, default: 'rgba(230, 230, 129, 0.651)'},
});
