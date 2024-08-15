export async function showBigProduct() {
  const data = await fetch("http://localhost:3000/data.json");

  const products = await data.json();
  console.log(products);

  products.map((data) => {
    let starsHtml = "";
    for (let i = 1; i <= data.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400 tablet:text-md text-xs"></i>`;
    }
    let totalStarsWithoutFill = 5 - data.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star  tablet:text-md text-xs"></i>`;
    }

    $("#bigProduct").append(`
          <a href="product/${data.id}" class="nav__link cardProducts" data-link>
            <div class="shadow-md p-3 m-0 flex flex-col md:m-10 h-full rounded-md cursor-pointer w-full flex-wrap">
              <div class="w-full rounded-md justify-center tablet:w-48 hp:w-32 w-24">
                  <img src="${
                    data.image[0]
                  }" class="rounded-md object-cover" />
              </div>
              <div class="flex flex-col  tablet:w-48 hp:w-32 w-24 flex-wrap">
                  <div class="flex flex-col flex-wrap">
                      <h1 class="font-bold text-wrap tablet:text-lg hp:text-md text-sm overflow-hidden">${
                        data.title
                      }</h1>
                      <p class="font-bold lh-1 tablet:text-lg hp:text-md text-sm">${toRupiah(
                        data.price
                      )}</p>
                  </div>
                  <p class="text-sm tablet:text-md">Stock: ${data.stock}</p>
                  <div class="flex items-center">
                      <div class="flex gap-1 items-center ">
                        ${starsHtml}
                      </div>
                      <p class="ml-2 font-bold tablet:text-md hp:text-sm text-xs">${data.rating}.0</p>
                  </div>
              </div>
          </div>
          </a>
          `);
  });
}

export async function showSmallProduct() {
  const data = await fetch("http://localhost:3000/data.json");

  const products = await data.json();
  const smallProducts = products.filter((product) => product.id <= 6);

  smallProducts.map((data) => {
    $("#smallProduct").append(`
       <a href="product/${data.id}" class="nav__link cardProducts" data-link>
            <div class="shadow-md p-3 m-0 hp:w-32 w-24 flex flex-col md:m-6 rounded-md cursor-pointer">
              <div class="w-full rounded-md">
                  <img src="${data.image[0]}" class="rounded-md object-cover" />
              </div>
              <div class="flex flex-col w-full flex-wrap">
                  <div class="flex flex-col text-center">
                      <h1 class="font-bold text-sm hp:text-md">${data.title}</h1>
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
  const promoProducts = products.filter((product) => product.price < 9000);
  console.log(promoProducts);

  promoProducts.map((data) => {
    $("#promoProduct").append(`
      <a href="product/${data.id}">
        <div class="shadow-lg flex flex-col p-3 rounded-2xl">
            <div class="w-full flex flex-col">
                <img src="${data.image[0]}" width="125px"/>
            </div>
            <div class="flex flex-col w-full flex-wrap">
                <div class="flex flex-col items-center">
                    <h1 class="font-bold text-sm hp:text-md ">${data.title}</h1>
                    <p class="lh-1 text-sm font-medium">
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
