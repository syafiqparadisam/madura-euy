
export async function showHomeProduct() {
    const data = await fetch("http://localhost:3000/data.json")
    
    const products = await data.json()
    console.log(products)
    
    products.map((data) => {
      let starsHtml = "";
      for (let i = 1; i <= data.rating; i++) {
        starsHtml += `<i class="bi bi-star-fill text-yellow-400"></i>`;
      }
      let totalStarsWithoutFill = 5 - data.rating;
      for (let i = 1; i <= totalStarsWithoutFill; i++) {
        starsHtml += `<i class="bi bi-star"></i>`;
      }
  
      document.getElementById("cardProduct").innerHTML = `
          <div class="flex flex-col rounded-md cursor-pointer cardProducts">
              <div class="w-full">
                  <img src="https://placehold.co/200x200" width= class="rounded-md" />
              </div>
              <div class="flex flex-col w-full flex-wrap">
                  <div class="flex flex-col ">
                      <h1 class="font-bold text-lg">${data.title}</h1>
                      <p class="font-bold lh-1 text-lg">${toRupiah(
                        data.price
                      )}</p>
                  </div>
                  <p>Stock: ${data.stock}</p>
                  <div class="flex items-center">
                      <div class="flex gap-1 items-center">
                        ${starsHtml}
                      </div>
                      <p class="ml-2 font-bold">${data.rating}.0</p>
                  </div>
              </div>
          </div>`;
    });
}

function toRupiah() {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
}

function navigateProduct(id) {
    window.location.replace("/product/" + id)
}