function productOutOfStock(item) {
  return item.originalStock - item.sold;
}

export default productOutOfStock;