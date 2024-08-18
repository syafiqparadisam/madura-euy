export function sortByLargeDiscount(products) {
  return products.sort((a, b) => b.discount - a.discount);
}

export function sortByNewestProduct(products) {
  return products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}


export function sortByOldProduct(products) {
  return products.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}


