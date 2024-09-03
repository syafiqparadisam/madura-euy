<!-- navbar-->
<nav class="bg-gray-100 w-full shadow-lg sticky top-0 z-40">
  <div class="mx-auto w-full px-2 tablet:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-around tablet:justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center cursor-pointer hp:mr-o mr-5 tablet:hidden">
        <!-- Mobile menu button-->
        <button type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!-- Icon when menu is open. -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Madura Logo -->
      <div
        class="flex items-center tablet:w-1/5 w-2/5 hp:block mx-auto justify-center tablet:justify-between cursor-pointer">
        <a href="/">
          <div class="flex items-center mr-3 justify-center">
            <img class="mt-2 max-w-24 text-center" src="/assets/logomadura-removebg-preview.png" alt="Your Company">
            <h2 class="font-bold -ml-7 tablet:block hidden">Bumi <span class="text-red-700">Madura</span>
            </h2>
          </div>
        </a>
      </div>

      <!-- Input Search -->
      <div class="flex items-center flex-col justify-center w-4/5 ml-sm-0 ml-10 hp:w-3/5 tablet:w-5/5 relative">
        <div class="bg-white flex w-full rounded-lg border-1 border border-black ">
          <input id="searchInput" class="w-full rounded-md py-sm-2 py-1 px-1 px-sm-2" autocomplete="on"
            placeholder="Search ..." />
          <i class="bi bi-search m-auto px-2 hover:cursor-pointer" id="searchIcon"></i>
        </div>
      </div>

      <!-- Login,Cart,Register Button -->
      <div class="right-0 items-center m-2 gap-3 tablet:flex">
        <div class="relative" id="nav-icon">
          <i class="bi bi-cart fs-3"></i>
          <div class="bg-red-600 absolute badge color-dark top-0 left-4" id="badgeRound">
            <span class="text-center" id="notification"></span>
          </div>
        </div>
        <div class="tablet:flex items-center justify-center gap-3 hidden">
          <a href="/login" class="rounded-md border-2 border-black px-4 py-2 font-bold">Login</a>
          <a href="/register" class="bg-black text-white px-4 py-2 rounded-md font-bold border-2 ">Register</a>
        </div>
      </div>
    </div>

  </div>
  </div>

  <!--Navbar Handphone devices -->
  <div class="hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2 absolute bg-white shadow-md w-full">
      <a href="/"
        class="block rounded-md hover:cursor-pointer bg-gray-900 text-xs hp:text-md px-3 py-2 text-center font-medium text-white"
        aria-current="page">Home</a>
      <a href="/login"
        class="block rounded-md  text-center hover:cursor-pointer bg-gray-900 text-xs hp:text-md px-3 py-2  font-medium text-white"
        aria-current="page">Login</a>
      <a href="/register"
        class="block rounded-md  text-center hover:cursor-pointer bg-gray-900 px-3 py-2 text-xs hp:text-md font-medium text-white"
        aria-current="page">Register</a>
    </div>
  </div>
</nav>
<!-- navbar end-->