import './App.css';
// Imported images
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";
// The 2 arrays needed to show the details of the inventory and the best sold tv.
import {bestSellingTv, inventory} from "./constants/inventory.js";

// All helper functions
import soldTelevisions from "./helpers/sold-televisions.js";
import totalPurchases from "./helpers/total-purchases.js";
import nameOfTelevision from "./helpers/name-of-television.js";
import televisionSizes from "./helpers/television-sizes.js";
import priceOfTelevision from "./helpers/price-of-television.js";
import televisionsToBeSold from "./helpers/televisions-to-be-sold.js";

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
                  <p>{soldTelevisions(inventory)}</p>
                </div>
                <div className="box tv-purchased">
                  <p>Aantal ingekochte producten</p>
                  <p>{totalPurchases(inventory)}</p>
                </div>
                <div className="box tv-to-be-sold">
                  <p>Aantal te verkopen producten</p>
                  <p>{televisionsToBeSold(totalPurchases(inventory), soldTelevisions(inventory))}</p>
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
                  <h3>{nameOfTelevision(bestSellingTv)}</h3>
                  <strong className="price">{priceOfTelevision(bestSellingTv)}</strong>
                  <p className="sizes">{televisionSizes(bestSellingTv)}</p>
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
