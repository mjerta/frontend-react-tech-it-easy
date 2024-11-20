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

export function getListSuitableForSport(inventory) {
  return inventory.map((item) => {
    return {name: item.name, suitable: item.refreshRate >= 100}
  });
}

export function getTelevionsAboveSize(inventory, size) {
  return inventory.filter((item) => {
    // This will return true because a value of that item will be returned so it will give a true value as well.
    return item.availableSizes.find((item) => item >= size)
  })
}

export function getTelivisionsWithAmbiLight(inventory) {
  return inventory.filter((item) => {
    return  item.options.find((option) => option.name === "ambiLight" && option.applicable === true)
  })
}

