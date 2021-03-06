import { MetaData } from './metadata';

export class Contact {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    telephone: string;
}

export class ContactResponse {
    metadata: MetaData;
    data: Contact[];
}