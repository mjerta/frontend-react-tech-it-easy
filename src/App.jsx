import {useState} from 'react';
import './assets/stylesheets/App.css';
// Imported images
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";
import soldOutImage from "./assets/out-of-stock.png";
// The 2 arrays needed to show the details of the inventory and the best sold tv.
import {
  bestSellingProduct,
  inventory
} from "./constants/inventory.js";

// All helper functions
import soldProducts from "./helpers/sold-products.js";
import totalPurchases from "./helpers/total-purchases.js";
import nameOfProduct from "./helpers/name-of-product.js";
import televisionSizes from "./helpers/television-sizes.js";
import priceOfProduct from "./helpers/price-of-product.js";
import productsToBeSold from "./helpers/products-to-be-sold.js";
import productOutOfStock from "./helpers/product-out-of-stock.js";

const sortOnSoldAmmount = "sort-on-sold-ammount";
const sortOnPrice = "sort-on-price";
const sortOnRefreshRate = "sort-on-refresh-rate";
const sortOnTVSize = "sort-on-tv-size";

const featuredImaged = "Featured image";

function App() {
  const [sortedInventory, setSortedInventory] = useState(inventory);

  const tvBrands = inventory.map((tvBrand) => {
    return tvBrand.brand;
  })

  console.log(tvBrands);

  function handleClick(e) {
    let sortedItems;
    console.log(e.target.textContent);
    console.log(e.target);

    if (e.target.name === sortOnSoldAmmount) {
      inventory.sort((a, b) => a.sold - b.sold);
      const sortedOnSoldItems = inventory.map((item) => {
        return item.sold + " item sold";
      }
      )
      console.log(inventory)
      console.log(sortedOnSoldItems);
    }

    if (e.target.name === sortOnPrice) {
      inventory.sort((a, b) => a.price - b.price);
      const sortedOPriceItems = inventory.map((item) => {
        return item.price + ",-";
      })
      console.log(inventory)
      console.log(sortedOPriceItems);
    }

    if (e.target.name === sortOnRefreshRate) {
      inventory.sort((a, b) => a.refreshRate - b.refreshRate);
      const sortedOnRefreshRateItems = inventory.map((item) => {
        return item.refreshRate + "Hz";
      })
      console.log(inventory);
      console.log(sortedOnRefreshRateItems);
    }

    if (e.target.name === sortOnTVSize) {
      sortedItems = [...inventory].sort((a, b) => Math.max(...b.availableSizes) - Math.max(...a.availableSizes));
      // inventory.sort((a, b) => Math.max(...b.availableSizes) - Math.max(... a.availableSizes));

      const sortedOnTVSizeItems = inventory.map((item) => {
        return Math.max(...item.availableSizes) + " inch";
      })
      setSortedInventory(sortedItems);
      console.log(inventory);
      console.log(sortedOnTVSizeItems);
    }
  }

  return (<>
    {console.log(sortedInventory)}
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
              <img alt={featuredImaged} className="featured-img"
                   src={bestSellingProduct.sourceImg}></img>
            </div>
            <div className="right-col">
              <h3>{nameOfProduct(bestSellingProduct)}</h3>
              <strong
              className="price">{priceOfProduct(bestSellingProduct)}</strong>
              <p className="sizes">{televisionSizes(bestSellingProduct)}</p>
              <p>
                {/* Here I am just showing an old way of how would approach this*/}
                {/* I Kept it in here for example purposes*/}
                {bestSellingProduct.options.map((option) => {
                  if (option.applicable) {
                    return (
                    <span className="option-holder" key={option.name}>
                                <img className="icons"
                                     src={checkIcon}
                                     alt="not-icon"/>
                      {option.name}
                    </span>)
                  } else {
                    return (
                    <span className="option-holder" key={option.name}>
                                <img className="icons"
                                     src={notIcon}
                                     alt="not-icon"/>
                      {option.name}
                    </span>)
                  }
                })}
              </p>
            </div>
          </div>
          <div className="filter-buttons">
            <button name={sortOnSoldAmmount} className={"main-btn"}
                    onClick={handleClick}>
              Meest verkocht eerst
            </button>
            <button name={sortOnPrice} className={"main-btn"}
                    onClick={handleClick}>
              Goedkoopste eerst
            </button>
            <button name={sortOnRefreshRate} className={"main-btn"}
                    onClick={handleClick}>
              Meest geschikt voor sport eerst
            </button>
            <button name={sortOnTVSize} className={"main-btn"}
                    onClick={handleClick}>
              Grootste schermgroottes eerst
            </button>
          </div>
        </section>
        {/* Because of the syntax of JSX I could also use the ( instead of the arrow function to implicit say you are returning the value.*/}
        {/* Here I decided to keep it for example purposes*/}
        {sortedInventory.map((tv) => {
          return (<section key={tv.type} className="telivision-display">
            {/*<h2>Best verkochte tv</h2>*/}
            <div className="card">
              <div className="left-col">
                {/* The reason you cant use an if inside an attribute like src or a return value  is that JSC attributes expect a single expression that  evaluates to a value.*/}
                {/* The ternary operator is an expression that directly returns a value, makint it suitable for JSC attributes*/}
                <img alt={featuredImaged} className="featured-img"
                     src={
                       productOutOfStock(tv) ?
                       soldOutImage
                       :
                       tv.sourceImg
                     }>
                </img>
              </div>
              <div className="right-col">
                <h3>{nameOfProduct(tv)}</h3>
                <strong
                className="price">{priceOfProduct(tv)}</strong>
                <p className="sizes">{televisionSizes(tv)}</p>
                <p className="card-options">
                  {/* When you use parentheses after an arrow function,  it implies an implicit return.*/}
                  {/* If you want to use the curly brackets you need to add the return before the ternary condition*/}
                  {tv.options.map((option) => (
                  option.applicable ? (
                  <span className="option-holder" key={option.name}>
                                  <img className="icons"
                                       src={checkIcon}
                                       alt="not-icon"/>
                    {option.name}
                    </span>

                  ) : (
                  <span className="option-holder" key={option.name}>
                                  <img className="icons"
                                       src={notIcon}
                                       alt="not-icon"/>
                    {option.name}
                    </span>
                  )
                  ))}
                </p>
              </div>
            </div>
          </section>)
        }
        )
        }
      </main>
    </div>
  </>
  )
}

export default App
