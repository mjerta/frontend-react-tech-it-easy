import './App.css';
import {soldTelivision} from "./helpers/soldTelivision.js";
import {totalPurchases} from "./helpers/totalPurchases.js";
import {tvtobesold} from "./helpers/tvtobesold.js";

function App() {
  const result = soldTelivision();
  const resultPurchase = totalPurchases();
  const tvtobesold1 = tvtobesold();
  return (
      <>
        <p className="tvsSold">Total tvs sold: {result}</p>
        <p className="tvsPurchaded">Total tvs purchased: {resultPurchase}</p>
        <p className="tvtobesold">Total tvs to be sold {tvtobesold1}</p>
      </>

  )
}

export default App
