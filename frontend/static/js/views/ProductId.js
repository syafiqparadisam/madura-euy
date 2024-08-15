import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.productId = params.id;
        this.setTitle(`Product ${this.productId}`);
    }

    async getHtml() {
        return `
           <div class="max-w-screen-xl mx-auto mt-10 p-4 bg-neutral-600 text-white flex flex-col min-h-screen" id="productCart" onload=>

</div>
        `;
    }
}
