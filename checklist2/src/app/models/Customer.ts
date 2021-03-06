// Interface for the customers collection on firestore
export interface Customer {
    id?: string;
    name?: string;
    domain?: string;
    date_created?: number;
    date_last_edited?: number;
    answers?: {};
}
