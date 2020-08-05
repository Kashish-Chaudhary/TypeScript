export class user {
    constructor(n, r, s) {
        this.name = n;
        this.roll = r;
        this.section = s;
    }
    detail() {
        console.log(`${this.name} is in ${this.section} section and roll no is ${this.roll}`);
    }
}
