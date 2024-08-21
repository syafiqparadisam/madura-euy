import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Product");
  }

  async getHtml() {
    return `
            <div>
              <!-- Filter -->
              <section class="flex w-full hp:w-4/5 mx-auto mt-5">
                <div class="w-full flex">
                    <div class=" w-full hp:px-0 px-3 mx-auto w-full">
                      <ul  class="flex flex-wrap hp:mx-o mx-auto -mb-px text-sm font-medium text-center text-black">
                        <li class="me-2 text-md shadow-md"  id="bigDiscountBtn">
                            <button  class="inline-flex font-bold  items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:border-black group">
                                <i class="bi bi-tag mr-2 hp:text-md text-xs"></i>
                                Discount tertinggi
                            </button>
                        </li>
                        <li class="me-2 text-md shadow-md" id="terbaruBtn">
                          <button id="terbaruBtn" class="inline-flex font-bold items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:border-black group">
                              <i class="bi bi-clock mr-2 hp:text-md text-xs"></i>
                              Terbaru
                          </button>
                        </li>
                        <li class="me-2 text-md shadow-md" id="terlamaBtn">
                          <button class="inline-flex font-bold items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:border-black group">
                              <i class="bi bi-clock mr-2 hp:text-md text-xs"></i>
                              Terlama
                          </button>
                        </li>
                      </ul>
                    </div>
                </div>
              </section>
            <!-- Filter -->
            
            <div class="flex max-w-3/5 ml-4 mt-4">
                <div class="flex gap-3 flex-wrap font-bold text-sm hp:text-xl justify-center items-center">
                    <i class="bi bi-search"></i>
                    <h1 id="searchResult"></h1>
                </div>
            </div>

                <section class="flex tablet:w-4/5 justify-content-around align-items-center flex-wrap my-10 tablet:gap-10 hp:gap-5 gap-2 mx-1 mx-md-auto" id="searchProducts">
                </section>
            </div>
        `;
  }
}
