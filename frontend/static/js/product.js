import { toRupiah } from "./utils.js";

export async function showProductCart(id) {
  try {
    const data = await fetch("../../../data.json");
    const products = await data.json();
    console.log(typeof id);

    const product = products.find((product) => product.id == parseInt(id));

    //rating
    let starsHtml = "";
    for (let i = 1; i <= product.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400"></i>`;
    }
    let totalStarsWithoutFill = 5 - product.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star"></i>`;
    }

    let VariantsContainer = [];
    for (let i = 0; i <= product.variants.length - 1; i++) {
      VariantsContainer.push(
        `<option  class="w-full p-2 bg-white rounded-md">${product.variants[i].variant}</option>`
      );
    }

    let imagesContainer = [];
    for (let i = 0; i <= product.image.length - 1; i++) {
      imagesContainer.push(
        `<img src="${product.image[i]}" alt="Thumbnail ${i}" class="thumbnails w-20 h-20 cursor-pointer rounded-md shadow-md" data-index="${i}">`
      );
    }

    $("#productCart").append(`
      <!-- Confirmation Modal -->
      <div id="confirmationModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg max-w-md h-auto mx-3">
          <p class="text-lg text-black font-semibold">Apakah kamu yakin ingin membeli Produk ini?</p>
          <div class="flex justify-end mt-4">
            <button id="confirmBuy" class="px-4 py-2 bg-green-500 text-white rounded mr-2 w-auto">YA</button>
            <button id="cancelBuy" class="px-4 py-2 bg-red-500 text-white rounded">BATAL</button>
          </div>
        </div>
      </div>
    
      <!-- Delivery Modal -->
      <div id="deliveryModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg max-w-md h-auto mx-3">
          <p class="text-lg text-black font-semibold">Di tunggu ya,barang sedang diantar &#128516;</p>
          <div class="flex justify-end">
            <button id="closeDeliveryModal" class="px-4 py-2 bg-blue-500 text-white rounded mt-4 inline-block w-auto">OK</button>
          </div>
        </div>
      </div>

      <!-- Cancel Modal -->
      <div id="cancelModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg max-w-md h-auto mx-3">
          <p class="text-lg text-black font-semibold">Transaksi dibatalkan &#128531;</p>
          <div class="flex justify-end">
            <button id="closeCancelModal" class="px-4 py-2 bg-blue-500 text-white rounded mt-4 inline-block w-auto">OK</button>
          </div>
        </div>
      </div>

      <!-- Grid Layout for Main Content -->
      <div class="grid grid-cols-1 hp:grid-cols-2 tablet:grid-cols-3 gap-4 flex-grow">
        <!-- Left Section: Product Image, Title, and Carousel -->
        <div class="space-y-4">
          <!-- Product Title Container -->
          <div class=" rounded-md hp:block hidden" id="mainTitle">
            <h1 id="productTitle" class="text-3xl font-bold text-black text-center  border-black">
            ${product.title}
            </h1>
            </div>
            <!-- Main Product Image -->
            <div id="mainImage" class="w-full h-80 flex justify-center items-center rounded-md overflow-hidden">
            <img
            id="currentImage"
              src="${product.image[0]}"
              alt="Product Image"
              class="object-cover h-full w-full"
            />
          </div>
          <!-- Carousel Thumbnails -->
          <div id="thumbnailContainer" class="flex flex-wrap gap-1 justify-between">
            ${imagesContainer.join("")}
          </div>
        </div>
    
        <!-- Middle Section: Product Details -->
        <div class="space-y-4">
          <!-- Pricing and Rating Section -->
          <div class="text-black p-4 space-y-2 rounded-md">
            <p class="text-lg">
              <h1 id="productTitleInPricing" class="text-2xl font-bold text-black hp:hidden block ">${
                product.title
              }</h1>
      <span id="discountedPrice" class="font-bold text-2xl">${toRupiah(
        discount(product.price, product.discount)
      )}</span>
        <span id="soldTotal" class="font-light text-m">( ${
          product.soldTotal
        } )</span>
      </span>
        <br />
         <span id="originalPrice" class="line-through">${toRupiah(
           product.price
         )}</span>
            </p>
            <div id="productRating" class="flex items-center space-x-2">
              ${starsHtml}
            </div>
            <p id="discountText" class="fw-bold">Diskon ${product.discount}%</p>
            <p id="productLocation" class="text-lg">
            <span class="fw-bold">Lokasi:</span> 
            ${product.location}
            </p>
          </div>
    
          <!-- Product Description -->
          <div class="text-black p-4 rounded-md shadow-md">
            <p id="productDescription">
              <span class="fw-bold  ">Deskripsi Produk:</span>
              <br />
              ${product.description}

            </p>
            
          </div>
        </div>
    
        <!-- Right Section: Atur Jumlah dan Catatan -->
        <div class="bg-gray-100 text-black p-4 space-y-4 rounded-md shadow-md">
          <h3 class="text-lg font-semibold">Atur Jumlah dan Catatan</h3>
          <div>
            <label for="variantSelect">Varian Produk:</label>
            <select
              id="variantSelect"
              class="w-full p-2 bg-white border border-gray-300 rounded"
            >
              ${VariantsContainer.join("")}
            </select>
          </div>
          <div class="flex items-center my-3 flex-wrap space-x-2">
          <label>Quantity:</label>
          <div class="flex space-x-2 my-sm-0 my-3">
            <button class="px-3 py-2 bg-slate-700 text-white rounded" id="decreaseQtt">-</button>
            <input
            id="quantityInput"
            type="text"
              value="1"
              class="text-center w-10 bg-white border border-gray-300 rounded"
              readonly
              />
              <button class="px-3 py-2 bg-slate-700 text-white rounded" id="increaseQtt">+</button>
              </div>
              </span>
              </div>
              
              <!-- Pricing Section (with Dynamic Subtotal) -->
              <span id="stockCount" class="my-10"><span class="font-bold">Stok:</span> ${
                product.stock
              }
              <div class="space-y-1">
            <p class="text-sm text-gray-500">Subtotal</p>
            <p class="text-lg font-semibold text-gray-900">
              <span id="subtotalPrice" class="text-xl">
                ${toRupiah(discount(product.price, product.discount))}
              </span>
            </p>
          </div>
    
          <div>
            <label for="TransactionMethod">Metode Transaksi:</label>
            <select
              id="TransactionMethod"
              class="w-full p-2 bg-white border border-gray-300 rounded"
            >
            <option>Cash on Delivery</option>
            <option>Delivery</option>
            </select>
          </div>

          <!-- Notes Section -->
          <div class="space-y-2">
            <label for="catatan" class="block text-gray-600">Catatan:</label>
            <textarea
              id="catatan"
              rows="6"
              class="w-full p-2 bg-white border border-gray-300 rounded"
              placeholder="Tambahkan catatan untuk pesanan Anda..."
            ></textarea>
          </div>
    
          <!-- Buy Button -->
          <div class="space-y-2">
            <button class="w-full bg-slate-700 text-white py-2 rounded" id="BuyButton">Beli</button>
          </div>
        </div>
      </div>
    `);

    // Attach events to quantity buttons
    $("#decreaseQtt").on("click", () => {
      decreaseQuantity();
    });

    $("#increaseQtt").on("click", () => {
      increaseQuantity();
    });

    $("#backButton").on("click", () => {
      window.location.href = "/";
    });

    //Update Thumbnail when picture in thumbnail container is clicked
    $("#thumbnailContainer").on("click", ".thumbnails", function () {
      // Get the index from the clicked thumbnail
      const index = $(this).data("index");
      // Get the image source from the `data.image` array based on the index
      const newImageSrc = product.image[index];

      // Change the main image source
      $("#currentImage").attr("src", newImageSrc);

      // Optional: Update thumbnail borders to indicate the selected image
      $(".thumbnails").css("border-bottom", "none");
      $(this).css("border-bottom", "3px solid red");
    });

    // Modal Box Functionality
    $("#BuyButton").on("click", function () {
      $("#confirmationModal").removeClass("hidden");
    });

    $("#confirmBuy").on("click", function () {
      updateBadgeValue();
      $("#confirmationModal").addClass("hidden");
      $("#deliveryModal").removeClass("hidden");
    });

    $("#cancelBuy").on("click", function () {
      $("#confirmationModal").addClass("hidden");
      $("#cancelModal").removeClass("hidden");
    });

    $("#closeDeliveryModal").on("click", function () {
      $("#deliveryModal").addClass("hidden");
    });

    $("#closeCancelModal").on("click", function () {
      $("#cancelModal").addClass("hidden");
    });

    //dynamic pricing based on Variants
    // Check if the selected variant exists in the product
    $("#variantSelect").on("change", function () {
      const selectedVariant = $(this).val();
      const variant = product.variants.find(
        (v) => v.variant === selectedVariant
      );

      let currentVariantPrice = Number(variant.price); // Update the current variant price

      const newDiscountedPrice = discount(
        currentVariantPrice,
        product.discount
      ); // Use product.discount here

      $("#discountedPrice").text(toRupiah(newDiscountedPrice));
      $("#originalPrice").text(toRupiah(currentVariantPrice));

      let price = parseRupiahToInteger();
      updateSubtotal(price);
    });
  } catch (err) {
   
  }
}

function discount(price, discountPercentage) {
  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}

export function updateSubtotal(price) {
  const quantity = parseInt(document.getElementById("quantityInput").value);

  const subtotal = price * quantity;

  // Format the subtotal
  let formattedSubtotal = subtotal
    .toLocaleString("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  formattedSubtotal += ",00";
  // Update the subtotal element
  document.getElementById(
    "subtotalPrice"
  ).textContent = `Rp ${formattedSubtotal}`;
}

export function increaseQuantity() {
  const quantityInput = document.getElementById("quantityInput");
  let quantity = parseInt(quantityInput.value);
  quantity += 1;
  quantityInput.value = quantity;
  const price = parseRupiahToInteger();
  updateSubtotal(price);
}

function parseRupiahToInteger() {
  let price = document.getElementById("discountedPrice").textContent;
  price = parseInt(price.replace(/[^0-9,-]+/g, "").replace(",", "")) / 100;
  return price;
}

export function decreaseQuantity() {
  const quantityInput = document.getElementById("quantityInput");
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity -= 1;
    quantityInput.value = quantity;
    const price = parseRupiahToInteger();
    updateSubtotal(price);
  }
}

export function changeImage(imageSrc, imageNumber) {
  document.getElementById("currentImage").src = imageSrc;

  let thumbnails = document.querySelectorAll(".thumbnails");

  thumbnails.forEach((thumbnail, index) => {
    // Apply a red border around the entire thumbnail if selected
    thumbnail.style.borderBotom =
      index === imageNumber ? "3px solid red" : "none";
  });
}

function updateBadgeValue() {
  let storedValue = parseInt(sessionStorage.getItem("cartBadgeValue"));
  let increment = storedValue + 1;
  sessionStorage.setItem("cartBadgeValue", increment.toString());
  $("#badgeRound").removeClass("hidden");
  $("#notification").text(increment);
}
