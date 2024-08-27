import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Toko Madura");
  }

  async getHtml() {
	return `
		<h1>Hello</h1>
	`
}
}