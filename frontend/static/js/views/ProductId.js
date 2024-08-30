import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.productId = params.id;
        this.setTitle(`Product `);
    }

    async getHtml(id) {
        return `
            <div class="text-start mt-3 ml-3" id="backButton">
              <button class="text-4xl">
              <i class="bi bi-arrow-left-circle-fill text-dark"></i>
              </button>
           </div>
           <div class="max-w-screen-xl mx-auto mt-10 p-4 text-white flex flex-col min-h-screen" id="productCart">
           </div>
        `;
    }
}


