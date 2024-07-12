import {bestSellingTv} from "../constants/inventory.js";

function nameOfTelevision() {
  return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export default nameOfTelevision;