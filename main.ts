import Chain from "./blockChain/chain";
import Wallet from "./blockChain/wallet";

const libir = new Wallet();
const gHot = new Wallet();
const vatu = new Wallet();
const furgy = new Wallet();

gHot.sendMoney(100, libir.publicKey!);
vatu.sendMoney(50, libir.publicKey!);
furgy.sendMoney(30, libir.publicKey!);

console.log(Chain.instance);
