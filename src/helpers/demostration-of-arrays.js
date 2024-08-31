export function getAllTvTypes(inventory) {
  return inventory.map((item) => {
    return item.type;
  })
}

export function getAllSoldOutTv(inventory, soldProducts) {
  return inventory.filter((item) => {
    return !soldProducts(item)
  })
}


export function getSpecificitem(inventory, findString) {
  return inventory.find((item) => {
      return item.type === findString;
  });
}