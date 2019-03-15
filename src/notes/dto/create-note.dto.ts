export class CreateNoteDto {
    readonly name: string;
    readonly description: string;
    readonly date?: Date;
    readonly color: string;
}
