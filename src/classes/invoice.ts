export class user{
    readonly name: string;   //we csn read it but cannot change
    roll:number;
    section: string;
    constructor(n:string,r:number,s:string){
        this.name=n
        this.roll=r;
        this.section=s;

    }
    detail(){
        console.log(`${this.name} is in ${this.section} section and roll no is ${this.roll}`);
    }
}