import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
        
 <!-- navbar-->
 <nav class="bg-gray-100">
 <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
     <div class="relative flex h-16 items-center justify-between">
         <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
             <!-- Mobile menu button-->
             <button type="button"
                 class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                 aria-controls="mobile-menu" aria-expanded="false">
                 <span class="absolute -inset-0.5"></span>
                 <span class="sr-only">Open main menu</span>

                 <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round"
                         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
                 <!--
           Icon when menu is open.

           Menu open: "block", Menu closed: "hidden"
         -->
                 <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
             </button>
         </div>
         <div class="flex items-center justify-between sm:items-stretch sm:justify-start">
             <div class="flex items-center justify-center">
                 <img class="mt-2" width="100" src="static/assets/logomadura-removebg-preview.png" alt="Your Company">
                 <h2 class="font-bold -ml-7">Bumi <span class="text-red-700">Madura</span></h2>
             </div>
         </div>
         <div class="flex items-center justify-center w-2/5">
             <div class="bg-white flex w-full rounded-lg border-1 border border-black">
                 <input id="searchInput" class="w-full rounded-md py-2 px-2 border-none focus:border-none" />
                 <i class="bi bi-search m-auto px-2"></i>
             </div>
         </div>
         <div class="right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
             <a href="/login" data-link class="rounded-md border-2 border-black px-4 py-2 font-bold">Login</a>
             <a href="/register" data-link class="bg-black text-white px-4 py-2 rounded-md font-bold border-2 ">Register</a>
         </div>
     </div>
 </div>
 </div>

 <!-- Mobile menu, show/hide based on menu state. -->
 <div class="sm:hidden" id="mobile-menu">
     <div class="space-y-1 px-2 pb-3 pt-2">

     </div>
 </div>
</nav>

<!-- navbar end-->
            <div id="controls-carousel" class="relative w-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://placehold.co/1500x300" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://placehold.co/1500x300" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://placehold.co/1500x300" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            </div>


            <!-- Promo -->
            <div class="flex w-full px-10 py-10 items-center justify-between ">
            </div>
            <!-- Promo end-->

            <!-- full card product -->
            <section class="flex w-full justify-around items-center flex-wrap my-10 gap-0 sm:px-20 px-0" id="cardProduct">
            </section>
            <!-- full card product-->
        `;
  }
}
