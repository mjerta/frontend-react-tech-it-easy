import soldTelevision from "./sold-television.js";
import totalPurchases from "./total-purchases.js";

function televisionsToBeSold() {
  console.log(totalPurchases());
  return totalPurchases() - soldTelevision();
}

export default televisionsToBeSold;