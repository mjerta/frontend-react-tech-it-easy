export const sortImplements = {
  sortOnSoldAmmount: {
    name: "sort-on-sold-ammount",
    text: "Meest verkocht eerst",
    sortFunction: (a, b) => b.sold - a.sold
  },
  sortOnPrice: {
    name: "sort-on-price",
    text: "Goedkoopste eerst",
    sortFunction: (a, b) => a.price - b.price
  },
  sortOnRefreshRate: {
    name: "sort-on-refresh-rate",
    text: "Meest geschikt voor sport eerst",
    sortFunction: (a, b) => b.refreshRate - a.refreshRate
  },
  sortOnTVSize:  {
    name: "sort-on-tv-size",
    text: "Grootste schermgroottes eerst",
    sortFunction: (a, b) => Math.max(...b.availableSizes) - Math.max(...a.availableSizes)
  }
}