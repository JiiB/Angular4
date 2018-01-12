// Interface for the question collection on firestore
export interface Question {
    id?: string;
    name?: string;
    ref?: {refDB?: string, refPath?: string };
}

