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
  return (<>
        <div className="wrapper">
          <header>
            <h1>Tech it easy dashboard</h1>
          </header>
          <main>
            <section className="sales-overview">
              <h2>Verkoopoverzicht</h2>
              <div className="box-wrapper">
                <div className="box tv-sold">
                  <p>Aantal verkochte producten</p>
                  <p>{soldTelivision()}</p>
                </div>
                <div className="box tv-purchased">
                  <p>Aantal ingekochte producten</p>
                  <p>{totalPurchases()}</p>
                </div>
                <div className="box tv-to-be-sold">
                  <p>Aantal te verkopen producten</p>
                  <p>{tvtobesold()}</p>
                </div>
              </div>
            </section>
            <section className="featured-display">
              <h2>Best verkochte tv</h2>
              <div className="card">
                <div className="left-col">
                  <img className="featured-img"
                       src={bestSellingTv.sourceImg}></img>
                </div>
                <div className="right-col">
                  <h3>{nameOfTelevision()}</h3>
                  <strong className="price">{priceoftelivision()}</strong>
                  <p className="sizes">{telivisionSizes()}</p>
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
                </div>
              </div>
            </section>
          </main>
        </div>
      </>

  )
}

export default App
