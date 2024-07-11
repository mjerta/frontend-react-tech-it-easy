import {soldTelivision} from "./soldTelivision.js";
import {totalPurchases} from "./totalPurchases.js";

export function tvtobesold() {
  return totalPurchases() - soldTelivision();
}