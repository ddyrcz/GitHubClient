import { Repo } from './repo';

export class User {
    constructor(
        private login: string,
        private name: string,
        private surname: string,        
        private repos? : Repo[],
        private avatarUrl? : string) {
        this.fullName = `${name} ${surname}`;
    }

    fullName: string;
}