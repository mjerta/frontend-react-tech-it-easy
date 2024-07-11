import {bestSellingTv} from "../constants/inventory.js";

function nameOfTelivision() {
  return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export default nameOfTelivision;