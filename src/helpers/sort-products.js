function sortProducts(eventTargetName, inventory, buttonNames) {
  console.log("inside the sortproducts functions");
  console.log(eventTargetName);
  switch (eventTargetName) {
    case buttonNames.sortOnSoldAmmount:
      return [...inventory].sort((a, b) => b.sold - a.sold);
    case buttonNames.sortOnPrice:
      return [...inventory].sort((a, b) => a.price - b.price);
    case buttonNames.sortOnRefreshRate:
      return [...inventory].sort((a, b) => a.refreshRate - b.refreshRate);
    case buttonNames.sortOnTVSize:
      return [...inventory].sort((a, b) => Math.max(...b.availableSizes) - Math.max(...a.availableSizes));
    default:
      return inventory
  }
}
export default sortProducts;