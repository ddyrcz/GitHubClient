import { Repo } from './repo';

export class User {
    constructor(
        private login: string,
        private name: string,
        private avatar_url: string) {
    }
}