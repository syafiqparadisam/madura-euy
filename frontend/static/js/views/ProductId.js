import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.productId = params.id;
        this.setTitle(`Product `);
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.productId}.</p>
        `;
    }
}
