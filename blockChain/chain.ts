import Block from "./block";
import Transaction from "./transaction";
import * as Crypto from "crypto"

export default class Chain {

    public static instance = new Chain();

    public chain: Block[] | null;

    constructor() {
        this.chain = [new Block(null, new Transaction(100, "genesis", "libir"))];
    }

    get lastBlock() {
        if (this.chain === null) return null;

        return this.chain[this.chain.length - 1];
    }

    mine(nonce: number) {
        let solution = 1;
        console.log('⛏️  mining...')
    
        while(true) {
    
          const hash = Crypto.createHash('MD5');
          hash.update((nonce + solution).toString()).end();
    
          const attempt = hash.digest('hex');
    
          if(attempt.substr(0,4) === '0000'){
            console.log(`Solved: ${solution}`);
            return solution;
          }
    
          solution += 1;
        }
      }
    

    addBlock(transaction: Transaction, senderPublicKey: string, signature: Buffer) {
        const verify = Crypto.createVerify('SHA256');
        verify.update(transaction.toString());
    
        const isValid = verify.verify(senderPublicKey, signature);
    
        if (isValid) {
          const newBlock = new Block(this.lastBlock!.hash, transaction);
          this.mine(newBlock.nonce);
          this.chain!.push(newBlock);
        }
      }
    }
