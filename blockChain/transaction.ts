export default class Transaction {
  public amount = 0;
  public payer = "";
  public payee = "";

  public constructor(amaount: number, payer: string, payee: string) {
    this.amount = amaount;
    this.payer = payer;
    this.payee = payee;
  }

  public toString() {
    return JSON.stringify(this);
  }
}
