export class User {
    constructor(
        private login: string,
        private name: string,
        private surname: string) {
        this.fullName = `${name} ${surname}`;
    }

    fullName: string;
}