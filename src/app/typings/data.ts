export interface IFile {
    notes: Record<string, INote>;
    globalNotes: INote[];
}

export interface INote {
    id: string;
    title: string;
    body: string;
    createdAt: number;
    updatedAt: number;
    isGlobal?: boolean;
}