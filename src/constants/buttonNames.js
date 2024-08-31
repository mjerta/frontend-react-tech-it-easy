export const buttonNames = {
  sortOnSoldAmmount: "sort-on-sold-amount",
  sortOnPrice: "sort-on-price",
  sortOnRefreshRate: "sort-on-refresh-rate",
  sortOnTVSize: "sort-on-tv-size"
}
export const test = {
  sortOnSoldAmmount: {
    name: "sort-on-sold-ammount",
    text: "Meest verkocht eerst",
    sortFunction: (a, b) => b.sold - a.sold
  },
  sortOnPrice: {
    name: "sort-on-price",
    text: "Goedkoopste eerst"
  },
  sortOnRefreshRate: {
    name: "sort-on-refresh-rate",
    text: "Meest geschikt voor sport eerst"
  },
  sortOnTVSize:  {
    name: "sort-on-tv-size",
    text: "Grootste schermgroottes eerst"
  }
}