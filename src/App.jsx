import './App.css';
import {soldTelivision} from "./helpers/soldTelivision.js";
import {totalPurchases} from "./helpers/totalPurchases.js";
import {tvtobesold} from "./helpers/tvtobesold.js";
import nameOfTelevision from "./helpers/nameOfTelivision.js";
import priceoftelivision from "./helpers/priceoftelivision.js";
import telivisionSizes from "./helpers/telivision-sizes.js";
import {bestSellingTv} from "./constants/inventory.js";
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";

function App() {
  return (
      <>
        <header>
          <h1>Tech it easy dashboard</h1>
        </header>
        <main>
          <section className="sales-overview">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </section>
          <section className="featured-display">

          </section>
        <img src={bestSellingTv.sourceImg}></img>
        </main>
        <p className="tvsSold">Total tvs sold: {soldTelivision()}</p>
        <p className="tvsPurchaded">Total tvs purchased: {totalPurchases()}</p>
        <p className="tvtobesold">Total tvs to be sold {tvtobesold()}</p>
        <p>{nameOfTelevision()}</p>
        <p>{priceoftelivision()}</p>
        <p>{telivisionSizes()}</p>
        <p>
          <img className="icons" src={checkIcon} alt="check-icon"/>
          wifi
          <img className="icons" src={notIcon} alt="not-icon"/>
          speech
          <img className="icons" src={checkIcon} alt="check-icon"/>
          hdr
          <img className="icons" src={checkIcon} alt="check-icon"/>
          bluetooth
          <img className="icons" src={notIcon} alt="not-icon"/>
          ambilight</p>
      </>

  )
}

export default App
