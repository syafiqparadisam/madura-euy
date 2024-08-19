import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Toko Madura");
  }

  async getHtml() {
    return `
   
            <!-- Popular Products -->
            <section class="flex w-full py-1 hp:py-4 tablet:py-7 justify-center items-center flex-wrap my-10 tablet:gap-10 gap-10 text-center hp:gap-3 mx-auto" id="smallProduct">
                
            </section>
            <!-- popular Products end -->

            <!-- Promo -->
            <section class="flex w-4/5 mx-auto justify-between tablet:flex-row flex-col h-full shadow-lg rounded-xl">
              <div class="tablet:w-1/5 w-full flex-col flex justify-around rounded-md py-3 hp:py-10 px-4 bg-black text-white">
                <h2 class="font-bold tablet:text-lg laptop:text-lg text-md hp:mb-3">Promo hari ini</h2>
                <h2 class="font-bold tablet:text-lg laptop:text-4xl text-md hp:block hidden text-left tablet:text-center mb-3">Hingga 40%</h2>
                <h5 class="hp:text-sm text-xs hp:block hidden">Dapatkan produk eksklusif kami dengan diskon spesial hanya untuk hari ini!</h5>
              </div>
              <div class="flex gap-10 tablet:w-4/5 justify-center items-center border-black flex-wrap m-auto laptop:px-0 border-opacity-50 p-4 rounded-lg" id="promoProduct">
              </div>
            </section>
            <!-- Promo end-->

            <!-- Big card product -->
            <section class="flex tablet:w-4/5 justify-center items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-4 mx-auto" id="bigProduct">
            </section>
            <!-- Big card product-->

          
        `;
  }
}
