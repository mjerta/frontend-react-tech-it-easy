import {useState} from 'react';
import './assets/stylesheets/App.css';
// Imported images
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";
import soldOutImage from "./assets/out-of-stock.png";

// This import is excluise for an assignment and will be only used for sone console logs
import {
  getAllSoldOutTv,
  getAllTvTypes,
  getListSuitableForSport,
  getSpecificitem,
  getTelevionsAboveSize,
  getTelivisionsWithAmbiLight
} from "./helpers/demostration-of-arrays.js";
// The 2 arrays needed to show the details of the inventory and the best sold tv.
import {
  bestSellingProduct,
  inventory
} from "./constants/inventory.js";
// This gives an object of the button names and sorting expressions I want to use later when they are called
import {sortImplements} from "./constants/sort-implements.js";
import {testObject} from "./constants/test-object.js";
// All helper functions
import soldProducts from "./helpers/sold-products.js";
import totalPurchases from "./helpers/total-purchases.js";
import nameOfProduct from "./helpers/name-of-product.js";
import televisionSizes from "./helpers/television-sizes.js";
import priceOfProduct from "./helpers/price-of-product.js";
import productsToBeSold from "./helpers/products-to-be-sold.js";
import productOutOfStock from "./helpers/product-out-of-stock.js";

// Components
import Button from "./components/button.jsx";
import Header from "./components/header.jsx";
import Box from "./components/box.jsx";
import TestComponent from "./components/test-component.jsx";
import Card from "./components/card.jsx";

const featuredImage = "Featured image";

console.log("/////////////// Examples assignment1 ///////////////\n")

function App() {
  console.log(getAllTvTypes(inventory));
  console.log(getAllSoldOutTv(inventory, productOutOfStock));
  console.log(getSpecificitem(inventory, "NH3216SMART"));
  console.log(getListSuitableForSport(inventory));
  console.log(getTelevionsAboveSize(inventory, 65));
  console.log(getTelivisionsWithAmbiLight(inventory));
  console.log("/////////////// End of examples assignment1 ///////////////\n\n")

  const [sortedInventory, setSortedInventory] = useState(inventory);

  function handleClick(e) {
    const sortkey = e.target.name;
    const result = [...inventory].sort(sortImplements[sortkey].sortFunction)
    // For example purposes
    console.log(`/////////////// Sorted result of ${sortkey} ///////////////\n`);
    console.log(result)
    console.log(`/////////////// End of sorted result of ${sortkey} ///////////////\n\n`);
    return result
  }

  function setSetter(arr) {
    setSortedInventory(arr);
  }

  return (
    <>
      <div className="wrapper">
        <Header>
          <h1>Tech it easy dashboard</h1>
        </Header
        >
        <TestComponent
          object={testObject}
        />
        <main>
          <section className="sales-overview">
            <h2>Verkoopoverzicht</h2>
            <div className="box-wrapper">
              <Box
                title="Aantal verkochte producten"
                value={soldProducts(inventory)}
                className="tv-sold"
              />
              <Box
                title="Aantal ingekochte producten"
                value={totalPurchases(inventory)}
                className="tv-purchased"
              />
              <Box
                title="Aantal te verkopen producten"
                value={productsToBeSold(totalPurchases(inventory), soldProducts(inventory))}
                className="box tv-to-be-sold"
              />
            </div>
          </section>
          <section className="featured-display">
            <h2>Best verkochte tv</h2>
            <Card
              product={bestSellingProduct}
              checkIcon={checkIcon}
              notIcon={notIcon}
              soldOutImage={soldOutImage}
              image={bestSellingProduct.sourceImg}
              altImage={featuredImage}
              productOutOfStock={productOutOfStock(bestSellingProduct)}
              nameOfProduct={nameOfProduct(bestSellingProduct)}
              priceOfProduct={priceOfProduct(bestSellingProduct)}
              televisionSizes={televisionSizes(bestSellingProduct)}
            />
            <div className="filter-buttons">
              {/* Started to experiment just a bit to see how far I can co with refactoring. I put the btn name and the text thats needed in a single object that contains 4 objects of the 4 buttons*/}
              {/* This way i could iterate over it and even use it in many places*/}
              {/* However I also realize I could kept it a bit more simple as well.*/}
              {/* You will see for the whole sorting I tried to get out the most out of the reuasables in the sortImplements object*/}
              {/* I also made a component out of this button*/}
              {Object.entries(sortImplements).map(([key, value]) => (
                <Button
                  key={key}
                  name={key}
                  onClick={(e) => setSetter(handleClick(e))}
                  buttonText={value.text}
                />
              ))}
            </div>
          </section>
          {/* Because of the syntax of JSX I could also use the ( instead of the arrow function to implicit say you are returning the value.*/}
          {/* Here I decided to keep it for example purposes*/}
          {sortedInventory.map((tv) => {
              return (<section key={tv.type} className="telivision-display">
                <Card
                  product={tv}
                  checkIcon={checkIcon}
                  notIcon={notIcon}
                  soldOutImage={soldOutImage}
                  image={tv.sourceImg}
                  altImage={"television image"}
                  productOutOfStock={productOutOfStock(tv)}
                  nameOfProduct={nameOfProduct(tv)}
                  priceOfProduct={priceOfProduct(tv)}
                  televisionSizes={televisionSizes(tv)}
                />
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
