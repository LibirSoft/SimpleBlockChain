import Transaction from "./transaction";
import * as Crypto from "crypto";

export default class Block {
  public nonce = Math.round(Math.random() * 999999999);

  public prevHash: string | null;
  public transaction: Transaction | null;
  public ts = Date.now();

  public constructor(prevHash: string | null, transaction: Transaction) {
    this.prevHash = prevHash;
    this.transaction = transaction;
  }

  public get hash() {
    const str = JSON.stringify(this);
    const hash = Crypto.createHash("SHA256");

    hash.update(str).end();
    return hash.digest("hex");
  }
}
