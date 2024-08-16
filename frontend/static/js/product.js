import { toRupiah } from "./home.js";

export async function showProductCart(id) {
  const data = await fetch("http://localhost:3000/data.json")
  const products = await data.json();

  const product = products.find((product) => product.id == id);
  const productArr = [product];
  let price = data.price;

  productArr.map((data) => {
    //rating
    let starsHtml = "";
    for (let i = 1; i <= data.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400"></i>`;
    }
    let totalStarsWithoutFill = 5 - data.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star"></i>`;
    }

    let VariantsContainer = [];
    for (let i = 0; i <= data.variants.length - 1; i++) {
      VariantsContainer.push(`<option>${data.variants[i].variant}</option>`);
    }

    let imagesContainer = [];
    for (let i = 0; i <= data.image.length - 1; i++) {
      imagesContainer.push(`<img src="${data.image[i]}" alt="Thumbnail ${i}" class="thumbnails w-20 h-20 cursor-pointer" data-index="${i}">`)  
    }


    $("#productCart").append(`<!-- Grid Layout for Main Content -->
      <div class="grid grid-cols-3 gap-4 flex-grow">
        <!-- Left Section: Product Image, Title, and Carousel -->
        <div class="space-y-4"> 
          <!-- Product Title Container -->
          <div class="bg-red-600 p-2">
            <h1 id="productTitle" class="text-2xl font-bold text-black">${data.title}</h1>
          </div>
          <!-- Main Product Image -->
          <div id="mainImage" class="w-full h-72 bg-gray-200 flex justify-center items-center">
            <img
              id="currentImage"
              src=${data.image[0]}
              alt="Product Image"
              class="object-contain h-full w-full"
            />
          </div>
          <!-- Carousel Thumbnails -->
          <div id="thumbnailContainer" class="flex justify-between">
            ${imagesContainer}
          </div>
        </div>
    
        <!-- Middle Section: Product Details -->
        <div class="space-y-4">
          <!-- Pricing and Rating Section -->
          <div class="bg-gray-200 text-black p-4 space-y-2">
            <p class="text-lg">
              <span id="originalPrice" class="line-through">${toRupiah(data.price)}</span>
              <span id="discountedPrice" class="font-semibold text-xl">${toRupiah(discount(data.price, data.discount))}</span>
              <span id="soldTotal" class="font-light text-m">(${data.soldTotal})</span>
            </p>
            <div id="productRating" class="flex items-center space-x-2">
              ${starsHtml}
            </div>
            <p id="discountText" class="text-red-500">Diskon ${data.discount}%</p>
            <p id="productLocation" class="text-lg">Lokasi: ${data.location}</p>
          </div>
    
          <!-- Product Description -->
          <div class="bg-gray-200 text-black p-4">
            <p id="productDescription">
              ${data.description}
            </p>
          </div>
        </div>
    
        <!-- Right Section: Atur Jumlah dan Catatan -->
        <div class="bg-gray-100 text-black p-4 space-y-4">
          <h3 class="text-lg font-semibold">Atur Jumlah dan Catatan</h3>
          <div>
            <label for="variantSelect">Varian Produk:</label>
            <select
              id="variantSelect"
              class="w-full p-2 bg-white border border-gray-300 rounded"
            >
             ${VariantsContainer}
            </select>
          </div>
          <div class="flex items-center space-x-4">
            <label>Quantity:</label>
            <button  class="px-4 py-2 bg-slate-700 text-white rounded" id="decreaseQtt">-</button>
            <input
              id="quantityInput"
              type="text"
              value="1"
              class="mx-2 text-center w-12 bg-white border border-gray-300 rounded"
              readonly
            />
            <button  class="px-4 py-2 bg-slate-700 text-white rounded" id="increaseQtt">+</button>
            <span id="stockCount" class="text-gray-500">Stok: ${data.stock}</span>
          </div>
    
          <!-- Pricing Section (with Dynamic Subtotal) -->
          <div class="space-y-1">
            <p class="text-sm text-gray-500">Subtotal</p>
            <p class="text-lg font-semibold text-gray-900">
              <span id="subtotalPrice" class="text-xl">${toRupiah(discount(data.price, data.discount))}</span>
            </p>
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
      
      <!-- Confirmation Modal -->
      <div id="confirmationModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg">
          <p class="text-lg">Are you sure you want to buy this item?</p>
          <div class="flex justify-end mt-4">
            <button id="confirmBuy" class="px-4 py-2 bg-green-500 text-white rounded mr-2">Yes</button>
            <button id="cancelBuy" class="px-4 py-2 bg-red-500 text-white rounded">No</button>
          </div>
        </div>
      </div>

      <!-- Delivery Confirmation Modal -->
      <div id="deliveryModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg">
          <p class="text-lg">Item is delivered</p>
          <button id="closeDeliveryModal" class="px-4 py-2 bg-blue-500 text-white rounded mt-4">OK</button>
        </div>
      </div>

      <!-- Purchase Cancelled Modal -->
      <div id="cancelModal" class="modal hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="modal-content bg-white p-4 rounded shadow-lg">
          <p class="text-lg">Purchase cancelled</p>
          <button id="closeCancelModal" class="px-4 py-2 bg-blue-500 text-white rounded mt-4">OK</button>
        </div>
      </div>
`)

    $("#decreaseQtt").on("click", () => {
      decreaseQuantity();
    })

    $("#increaseQtt").on("click", () => {
      increaseQuantity();
    })

    //Update Thumbnail when picture in thumbnail container is clicked
    $("#thumbnailContainer").on("click", ".thumbnails", function () {
      // Get the index from the clicked thumbnail
      const index = $(this).data("index");
      // Get the image source from the `data.image` array based on the index
      const newImageSrc = data.image[index]; // Ensure `data` is in scope here

      // Change the main image source
      $("#currentImage").attr("src", newImageSrc);

      // Optional: Update thumbnail borders to indicate the selected image
      $(".thumbnails").css("border-bottom", "none");
      $(this).css("border-bottom", "3px solid red");

      /*Modal Box */
      const $buyButton = $("#buyButton");
      const $confirmationModal = $("#confirmationModal");
      const $deliveryModal = $("#deliveryModal");
      const $cancelModal = $("#cancelModal");
      const $confirmBuy = $("#confirmBuy");
      const $cancelBuy = $("#cancelBuy");
      const $closeDeliveryModal = $("#closeDeliveryModal");
      const $closeCancelModal = $("#closeCancelModal");

      $("#BuyButton").on("click", function () {
        $("#confirmationModal").removeClass("hidden");
        console.log("#confirmationModal")
      });

      $confirmBuy.on("click", function () {
        $confirmationModal.addClass("hidden");
        $deliveryModal.removeClass("hidden");
      });

      $cancelBuy.on("click", function () {
        $confirmationModal.addClass("hidden");
        $cancelModal.removeClass("hidden");
      });

      $closeDeliveryModal.on("click", function () {
        $deliveryModal.addClass("hidden");
      });

      $closeCancelModal.on("click", function () {
        $cancelModal.addClass("hidden");
      });
    });
  })
}

export function discount(price, discountPercentage) {
  const discountAmount = price * (discountPercentage / 100);
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}

export function updateSubtotal() {
  // Select the subtotal DOM element and update its text content
  const quantity = parseInt(document.getElementById('quantityInput').value);
  const discountedPrice = parseFloat(document.getElementById('discountedPrice').textContent.replace(/[^\d.-]/g, ''));
  const subtotal = discountedPrice * quantity;

  // Select the subtotal DOM element and update its text content
  const subtotalElement = document.getElementById('subtotalPrice');

  // Ensure that the subtotal is formatted correctly to two decimal places
  subtotalElement.textContent = `Rp ${subtotal.toLocaleString("id-ID", { minimumFractionDigits: 3, maximumFractionDigits: 99 })}`;
}

export function increaseQuantity() {
  let quantity = parseInt(quantityInput.value);
  quantity += 1;
  quantityInput.value = quantity;
  updateSubtotal();
}

export function decreaseQuantity() {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity -= 1;
    quantityInput.value = quantity;
    updateSubtotal();
  }
}

export function changeImage(imageSrc, imageNumber) {
  document.getElementById("currentImage").src = imageSrc;
  // Reset all borders to none
  let thumbnails = document.querySelectorAll(".thumbnails");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.borderBottom =
      index === imageIndex ? "3px solid red" : "none";
  });
}
