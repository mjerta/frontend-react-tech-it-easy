import {bestSellingTv} from "../constants/inventory.js";

function priceOfTelivision() {
  return `€${bestSellingTv.price},-`;
}

export default priceOfTelivision;