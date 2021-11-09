import * as Crypto from "crypto";
import Chain from "./chain";
import Transaction from "./transaction";

export default class Wallet {
  public publicKey: string | null;
  public privateKey: string | null;

  public money = 100;

  public constructor() {
    const keypair = Crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: { type: "spki", format: "pem" },
      privateKeyEncoding: { type: "pkcs8", format: "pem" },
    });
    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }

  public sendMoney(amount: number, payeePublicKey: string) {
    if (amount <= this.money) {
      this.money -= amount;

      const transaction = new Transaction(
        amount,
        this.publicKey!,
        payeePublicKey
      );

      const sign = Crypto.createSign("SHA256");
      sign.update(transaction.toString()).end();

      const signature = sign.sign(this.privateKey!);

      Chain.instance.addBlock(transaction, this.publicKey!, signature);
    }
  }
}
