import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.productId = params.id;
        this.setTitle(`Product ${this.productId}`);
    }

    async getHtml() {
        return `
            <h1>Product</h1>
            <p>You are viewing product #${this.productId}.</p>
        `;
    }
}
