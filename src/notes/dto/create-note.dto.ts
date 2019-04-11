export class CreateNoteDto {
    readonly title: string;
    readonly description: string;
    readonly date?: Date;
    readonly color: string;
}
