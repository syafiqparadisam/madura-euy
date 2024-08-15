let products = [];

async function showProductCart() {
  const data = await fetch("http://localhost:3000/data.json")
    
  const products = await data.json();

  products.map((data) => {
    let starsHtml = "";
    for (let i = 1; i <= data.rating; i++) {
      starsHtml += `<i class="bi bi-star-fill text-yellow-400"></i>`;
    }
    let totalStarsWithoutFill = 5 - data.rating;
    for (let i = 1; i <= totalStarsWithoutFill; i++) {
      starsHtml += `<i class="bi bi-star"></i>`;
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
              src="https://placehold.co/256x285?text=Pic1"
              alt="Product Image"
              class="object-contain h-full w-full"
            />
          </div>
          <!-- Carousel Thumbnails -->
          <div id="thumbnailContainer" class="flex justify-between">
            <!-- Thumbnails will be inserted here dynamically -->
          </div>
        </div>
    
        <!-- Middle Section: Product Details -->
        <div class="space-y-4">
          <!-- Pricing and Rating Section -->
          <div class="bg-gray-200 text-black p-4 space-y-2">
            <p class="text-lg">
              <span id="originalPrice" class="line-through">${data.price}</span>
              <span id="discountedPrice" class="font-semibold text-xl">${data.price}</span>
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
              <!-- Variants will be dynamically populated -->
            </select>
          </div>
          <div class="flex items-center space-x-4">
            <label>Quantity:</label>
            <button onclick="decreaseQuantity()" class="px-4 py-2 bg-slate-700 text-white rounded">-</button>
            <input
              id="quantityInput"
              type="text"
              value="1"
              class="mx-2 text-center w-12 bg-white border border-gray-300 rounded"
            />
            <button onclick="increaseQuantity()" class="px-4 py-2 bg-slate-700 text-white rounded">+</button>
            <span id="stockCount" class="text-gray-500">Stok: ${data.stock}</span>
          </div>
    
          <!-- Pricing Section (with Dynamic Subtotal) -->
          <div class="space-y-1">
            <p class="text-sm text-gray-500">Subtotal</p>
            <p class="text-lg font-semibold text-gray-900">
              <span id="subtotalPrice" class="text-xl">${data.price}</span>
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
            <button class="w-full bg-slate-700 text-white py-2 rounded">Beli</button>
          </div>
        </div>
      </div>`)
  })
}


  function extractPriceFromElement(element) {
    // Remove 'Rp ' and commas from the text and convert to a number
    return parseInt(element.textContent.replace(/Rp\s?|\.|,/g, ""));
  }

  // Initialize pricePerItem by extracting the value from subtotalPrice
  let pricePerItem = extractPriceFromElement(subtotalElement);

  let quantityInput = document.getElementById("quantityInput");

  function updateSubtotal() {
    const quantity = parseInt(quantityInput.value);
    const subtotal = pricePerItem * quantity;
    subtotalElement.textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
  }

  function increaseQuantity() {
    let quantity = parseInt(quantityInput.value);
    quantity += 1;
    quantityInput.value = quantity;
    updateSubtotal();
  }

  function decreaseQuantity() {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantity -= 1;
      quantityInput.value = quantity;
      updateSubtotal();
    }
  }

  function changeImage(imageSrc, imageNumber) {
    document.getElementById("currentImage").src = imageSrc;
    // Reset all borders to none
    let thumbnails = document.querySelectorAll(".cursor-pointer");
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.style.borderBottom =
        index === imageNumber - 1 ? "3px solid red" : "none";
    });
  }

  