export default class Transaction {
    public amount: number = 0;
    public payer: string = "";
    public payee: string = "";

    constructor(amaount: number, payer: string, payee: string) {
        this.amount = amaount;
        this.payer = payer;
        this.payee = payee;
    }

    toString() {
        return JSON.stringify(this);
    }

}