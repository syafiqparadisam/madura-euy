export async function showBigProduct() {
  const data = await fetch("http://localhost:3000/data.json");

  const products = await data.json();
  console.log(products);

  products.map((data) => {
    let starsHtml = "";
    for (let i = 1; i <= data.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400"></i>`;
    }
    let totalStarsWithoutFill = 5 - data.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star"></i>`;
    }

    $("#bigProduct").append(`
          <a href="product/${data.id}" class="nav__link cardProducts" data-link>
            <div class="shadow-md p-3 m-5 flex flex-col rounded-md cursor-pointer">
              <div class="w-full rounded-md">
                  <img src="${data.image[0]}" width= class="rounded-md" />
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
          </div>
          </a>
          `);
  });
}

export async function showPromoProduct() {
  const data = await fetch("http://localhost:3000/data.json");

  const products = await data.json();
  const tenProducts = products.splice(9, 5);
  console.log(tenProducts);

  tenProducts.map((data) => {
    $("#promoProduct").append(`
      <a href="${data.id}">
        <div class="shadow-lg flex flex-col p-3 rounded-2xl">
            <div class="w-full flex flex-col">
                <img src="${data.image[0]}"/>
            </div>
            <div class="flex flex-col w-full flex-wrap">
                <div class="flex flex-col items-center">
                    <h1 class="font-bold text-lg">${data.title}</h1>
                    <p class="lh-1 text-lg font-medium">
                      ${toRupiah(data.price)}
                    </p>
                </div>
            </div>
        </div>
    </a>
    `);
  });
}

function toRupiah(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
}
