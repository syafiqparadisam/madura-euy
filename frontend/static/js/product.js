import { toRupiah } from "./home.js";

export async function showProductCart(id) {
  const data = await fetch("http://localhost:3000/data.json")
  const products = await data.json();
  
  const product = products.find((product) => product.id == id);
  const productArr = [product];

  
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

    //Image
  //   let thumbnailsHtml = data.image.map((imgSrc, index) => {
  //     // Index is used for both the alt text and the onclick function for changeImage
  //     return `
  //         <img src="${imgSrc}" alt="Thumbnail ${index + 1}" class="w-20 h-20 cursor-pointer" onclick="changeImage('${imgSrc}', ${index + 1})">
  //     `;
  // // })

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
                <img src="${data.image[0]}" alt="Thumbnail 1" class="thumbnails w-20 h-20 cursor-pointer">
                <img src="${data.image[1]}" alt="Thumbnail 2" class="thumbnails w-20 h-20 cursor-pointer">
                <img src="${data.image[2]}" alt="Thumbnail 3" class="thumbnails w-20 h-20 cursor-pointer">
                <img src="${data.image[3]}" alt="Thumbnail 4" class="thumbnails w-20 h-20 cursor-pointer">
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
              <option>${data.variant[0]}</option>
              <option>${data.variant[1]}</option>
              <option>${data.variant[2]}</option>
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
            <button class="w-full bg-slate-700 text-white py-2 rounded">Beli</button>
          </div>
        </div>
      </div>`)

    $("#decreaseQtt").on("click", () => {
        decreaseQuantity();
    })
    
    $("#increaseQtt").on("click", () => {
        increaseQuantity();
    })

    $(".thumbnails").on("click", () => {
      const imageSrc = $(this).data('src'); // Get the image source from data attribute
      const imageIndex = $(this).data('index'); // Get the index of the image
    
      // Call the changeImage function with the src and index
      changeImage(imageSrc, imageIndex); // Pass index as is to match 1-based indexin
    })
  })
}

export function discount(price, discountPercentage) {
  const discountAmount =( price * discountPercentage ) / 100;
  const discountedPrice= price - discountAmount;
  return discountedPrice;
}

export function updateSubtotal() {
  const quantity = parseInt(document.getElementById('quantityInput').value);
  const discountedPrice = parseFloat(document.getElementById('discountedPrice').textContent.replace(/[^\d.-]/g, '')); // Get the numeric value from discounted price
  const subtotal = discountedPrice * quantity;

  // Select the subtotal DOM element and update its text content
  const subtotalElement = document.getElementById('subtotalPrice');
  subtotalElement.textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
}

 export function increaseQuantity() {
  console.log("kdkjcns");
  let quantity = parseInt(quantityInput.value);
  quantity += 1;
  quantityInput.value = quantity;
  updateSubtotal();
}

export function decreaseQuantity() {
  console.log("jdsjhn");
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
      index === imageNumber - 1 ? "3px solid red" : "none";
  });
}
