import {bestSellingTv} from "../constants/inventory.js";

function televisionSizes() {
  let string = "";
  const sizes = bestSellingTv.availableSizes;
  for (let i = 0; i < sizes.length; i++) {
    if (i > 0) {
      string += " | ";
    }
    string += `${sizes[i]} inch (${Math.round(sizes[i] * 2.54)} cm)`;
  }
  return string;
}

export default televisionSizes;