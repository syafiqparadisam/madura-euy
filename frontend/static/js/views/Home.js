import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Toko Madura");
  }

  async getHtml() {
    return `
   
            <!-- Small Products -->
            <section class="flex w-4/5 justify-around items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-2 mx-auto" id="smallProduct">
                
            </section>
            <!-- Small Products end -->

            <!-- Promo -->
            <section class="flex w-4/5 mx-auto px-5 py-3 justify-between tablet:flex-row flex-col shadow-lg rounded-xl">
                <div class="tablet:w-1/5 w-full flex-col flex">
                    <h2 class="font-bold tablet:text-lg laptop:text-xl text-md mb-3">Promo hari ini</h2>
                    <h5 class="text-sm">Dapatkan produk eksklusif kami dengan diskon spesial hanya untuk hari ini!</h5>
                </div>
                <div class="flex gap-10 justify-center px-5 items-center border-black  tablet:overflow-hidden tablet:overflow-x-hidden overflow-x-scroll overflow-y-hidden  border-opacity-50 p-4 rounded-lg" id="promoProduct">
                </div>
            </section>
            <!-- Promo end-->

            <!-- full card product -->
            <section class="flex tablet:w-4/5 justify-around items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-2 mx-1 hp:mx-auto" id="bigProduct">
            </section>
            <!-- full card product-->
        `;
  }
}
