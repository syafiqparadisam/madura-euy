import {
  sortByLargeDiscount,
  sortByNewestProduct,
  sortByOldProduct,
} from "./filter.js";
import { toRupiah, shortTitle } from "./utils.js";

export async function showPopularProduct() {
  try {
    const data = await fetch("/data.json");

    const products = await data.json();
    const popularProducts = products.filter((product) => product.id <= 6);

    popularProducts.map((data) => {
      $("#popularProduct").append(`
       <a href="product/${data.id}" class="nav__link cardProducts" data-link>
            <div class="shadow-md pb-3 m-auto flex flex-col md:m-6 rounded-md cursor-pointer justify-content-start">
              <div class="hp:w-[120px] w-[70px] h-[70px] hp:h-[120px]  m-auto flex overflow-hidden items-center justify-center">
                  <img src="${
                    data.image[0]
                  }" class="rounded-md object-cover w-full h-full object-center" />
              </div>
              <div class="flex justify-center mx-auto hp:w-full w-4/5  flex-wrap">
                      <h1 class="pt-1 font-bold text-xs text-wrap text-center hp:text-md">${shortTitle(
                        data.title
                      )}</h1>
              </div>
          </div>
          </a>
      `);
    });
  } catch (err) {}
}

export async function showPromoProduct() {
  try {
    const data = await fetch("/data.json");

    const products = await data.json();
    const promoProducts = products
      .filter((product) => product.price < 5000)
      .splice(1, 4);

    promoProducts.map((data) => {
      $("#promoProduct").append(`
      <a href="product/${data.id}">
        <div class="shadow-sm flex flex-col p-2 rounded-xl">
          <div class="hp:w-[100px] w-auto mx-auto flex flex-col overflow-hidden h-[100px]">
            <img src="${
              data.image[0]
            }" class="w-full h-full rounded-md object-center object-cover"/>
          </div>
          <div class="flex flex-col w-full h-full flex-wrap">
            <div class="flex flex-col items-center">
              <h1 class="hp:font-bold font-medium text-xs hp:text-sm leading-5 tablet:text-md">${shortTitle(
                data.title
              )}</h1>
              <p class="leading-5 tablet:text-lg hp:text-md font-bold text-xs">
                ${toRupiah(data.price)}
              </p>
            </div>
          </div>
        </div>
      </a>
    `);
    });
  } catch (err) {}
}

export async function getProductsBySearchParams(params) {
  try {
    const datas = await fetch("/data.json");
    const result = await datas.json();

    $("#searchResult").html(`Hasil penelusuran untuk ${params}`);

    // Buat regex dari kata kunci pencarian
    const regex = new RegExp(params, "i"); // 'i' untuk case-insensitive

    // Filter produk berdasarkan deskripsi yang cocok dengan regex jika tidak ada deskripsi yang cocok maka carikan title
    let products = result.filter((product) => regex.test(product.title));

    // trying to search by description if title failed
    if (products.length == 0) {
      products = result.filter((product) => regex.test(product.description));
    }

    // Show Info if product isn't exist after search by title or description
    if (products.length == 0) {
      $("#searchProducts").html(
        `<h1 class="tablet:text-2xl py-5 tablet:py-10 hp:text-xl text-center text-md font-bold">Produk ${params} tidak ditemukan</h1>`
      );
    }

    // Handle Filter Event, Big Discount, Old Product, Newest Product
    handleFilter(products, params);

    // append html element
    appendProduct(products);
  } catch (err) {}
}

function appendProduct(products) {
  products.map((data) => {
    let starsHtml = "";
    for (let i = 1; i <= data.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400 tablet:text-md text-xs"></i>`;
    }
    let totalStarsWithoutFill = 5 - data.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star  tablet:text-md text-xs"></i>`;
    }

    $("#searchProducts").append(`
    <a href="product/${data.id}" class="nav__link cardProducts" data-link>
      <div class="shadow-md p-3 flex flex-col m-auto rounded-md cursor-pointer">
        <div class="flex flex-col overflow-hidden m-auto rounded-md justify-center items-center tablet:h-[120px] tablet:w-[120px] hp:w-[70px] hp:h-[70px] h-[70px] w-[70px]">
            <img src="${
              data.image[0]
            }" class="rounded-md w-full h-full object-cover object-center mx-auto" />
        </div>
        <div class="flex flex-col tablet:w-48 hp:w-32 w-24 flex-wrap mt-3">
            <div class="flex flex-col flex-wrap">
                <h1 class="font-bold text-wrap tablet:text-lg hp:text-md leading-1 text-sm overflow-hidden">${shortTitle(
                  data.title
                )}</h1>
                <p class="font-bold lh-1 tablet:text-lg hp:text-md text-sm">${toRupiah(
                  data.price
                )}</p>
            </div>
            <p class="text-sm tablet:text-md">Stock: ${data.stock}</p>
            <div class="flex items-center">
                <div class="flex gap-1 items-center ">
                  ${starsHtml}
                </div>
                <p class="ml-2 font-bold tablet:text-md hp:text-sm text-xs">${
                  data.rating
                }.0</p>
            </div>
        </div>
    </div>
    </a>
    `);
  });
}

function handleFilter(product, params) {
  let products = product;
  $("#bigDiscountBtn").on("click", () => {
    products = sortByLargeDiscount(products);
    $("#searchProducts").empty();
    // if product isn't exist after search by title or description
    if (products.length == 0) {
      $("#searchProducts").html(
        `<h1 class="tablet:text-2xl py-5 tablet:py-10 hp:text-xl text-md font-bold">Produk ${params} tidak ditemukan</h1>`
      );
      return;
    }
    appendProduct(products);
  });

  $("#terbaruBtn").on("click", () => {
    products = sortByNewestProduct(products);
    $("#searchProducts").empty();
    // if product isn't exist after search by title or description
    if (products.length == 0) {
      $("#searchProducts").html(
        `<h1 class="tablet:text-2xl py-5 tablet:py-10 hp:text-xl text-md font-bold">Produk ${params} tidak ditemukan</h1>`
      );
      return;
    }
    appendProduct(products);
  });

  $("#terlamaBtn").on("click", () => {
    products = sortByOldProduct(products);
    $("#searchProducts").empty();
    // if product isn't exist after search by title or description
    if (products.length == 0) {
      $("#searchProducts").html(
        `<h1 class="tablet:text-2xl py-5 tablet:py-10 hp:text-xl text-md font-bold">Produk ${params} tidak ditemukan</h1>`
      );
      return;
    }
    appendProduct(products);
  });
}
