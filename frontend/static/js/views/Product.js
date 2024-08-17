import AbstractView from "./AbstractView.js";
import { getLargestDiscount } from "../filter.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Product");
  }

  async getHtml() {
    return `
            <div>
              <!-- Filter -->
              <section class="flex w-4/5 mx-auto mt-5">
                <div class="w-full flex">
                    <div class="border-b border-red-200 dark:border-red-700">
                      <ul id="bigDiscountBtn" class="flex flex-wrap -mb-px text-sm font-medium text-center text-black">
                        <li class="me-2" >
                            <button  class="inline-flex font-bold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-red-300 group">
                                <i class="bi bi-tag mr-2"></i>
                                Big discount
                            </button>
                        </li>
                        <li class="me-2" id="terbaruBtn">
                          <button id="terbaruBtn" class="inline-flex font-bold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-red-300 group">
                              <i class="bi bi-clock mr-2"></i>
                              Terbaru
                          </button>
                        </li>
                        <li class="me-2" id="terlamaBtn">
                          <button class="inline-flex font-bold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-red-300 group">
                              <i class="bi bi-clock mr-2"></i>
                              Terlama
                          </button>
                        </li>
                      </ul>
                    </div>
                </div>
              </section>
            <!-- Filter -->
            <div class="flex max-w-3/5 ml-4 mt-4">
                <div class="flex gap-3 font-bold text-sm hp:text-xl justify-center items-center">
                    <i class="bi bi-search"></i>
                    <h1 id="searchResult"></h1>
                </div>
            </div>
                <section class="flex tablet:w-4/5 justify-around items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-2 mx-1 hp:mx-auto" id="searchProducts">
                </section>
            </div>
        `;
  }
}
