import {inventory} from '../constants/inventory.js';

function totalPurchases() {
  let totalPurchase = 0;
  for (let i = 0; i < inventory.length; i++) {
    totalPurchase += inventory[i].originalStock;
  }
  return totalPurchase;
}

export default totalPurchases;