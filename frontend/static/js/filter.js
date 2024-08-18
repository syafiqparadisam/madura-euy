
export function getProductWithLargestDiscount(products) {
    return products.reduce((maxDiscountProduct, currentProduct) => {
      if (!maxDiscountProduct || currentProduct.discount > maxDiscountProduct.discount) {
        return currentProduct;
      }
      return maxDiscountProduct;
    }, null);
  }

  
export function getLargestDiscount() {
  console.log("terclick jancok")
}
