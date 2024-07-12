import './App.css';
// Imported images
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";
// The 2 arrays needed to show the details of the inventory and the best sold tv.
import {bestSellingProduct, inventory} from "./constants/inventory.js";

// All helper functions
import soldProducts from "./helpers/sold-products.js";
import totalPurchases from "./helpers/total-purchases.js";
import nameOfProduct from "./helpers/name-of-product.js";
import televisionSizes from "./helpers/television-sizes.js";
import priceOfProduct from "./helpers/price-of-product.js";
import productsToBeSold from "./helpers/products-to-be-sold.js";

function App() {

  function handleClick(e) {
    console.log(e.target.textContent);
  }

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
                  <p>{soldProducts(inventory)}</p>
                </div>
                <div className="box tv-purchased">
                  <p>Aantal ingekochte producten</p>
                  <p>{totalPurchases(inventory)}</p>
                </div>
                <div className="box tv-to-be-sold">
                  <p>Aantal te verkopen producten</p>
                  <p>{productsToBeSold(totalPurchases(inventory), soldProducts(inventory))}</p>
                </div>
              </div>
            </section>
            <section className="featured-display">
              <h2>Best verkochte tv</h2>
              <div className="card">
                <div className="left-col">
                  <img className="featured-img"
                       src={bestSellingProduct.sourceImg}></img>
                </div>
                <div className="right-col">
                  <h3>{nameOfProduct(bestSellingProduct)}</h3>
                  <strong
                      className="price">{priceOfProduct(bestSellingProduct)}</strong>
                  <p className="sizes">{televisionSizes(bestSellingProduct)}</p>
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
              <div className="filter-buttons">
                <button className={"main-btn"} onClick={handleClick}>
                  Meest verkocht eerst
                </button>
                <button className={"main-btn"} onClick={handleClick}>
                  Goedkoopste eerst
                </button>
                <button className={"main-btn"} onClick={handleClick}>
                  Meest geschikt voor sport eerst
                </button>
              </div>
            </section>
          </main>
        </div>
      </>

  )
}

export default App
