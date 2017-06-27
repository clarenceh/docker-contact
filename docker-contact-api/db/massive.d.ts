import * as massive from 'massive';
import { Contact } from '../types/contact';

declare module "massive" {
  interface Database {
    contact: massive.Table<Contact>;
  }
}