import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
    }

    async getHtml() {
        let tableRows = '';
        for (let i = 1; i <= 10; i++) {
            tableRows += `
                <tr>
                    <th scope="row">pr${i}</th>
                    <td>Produk ${i}</td>
                    <td>Kategori ${i}</td>
                    <td>${2000 + (i * 100)}</td>
                    <td>v e d r</td>
                </tr>
            `;
        }

        return `
            <div class="text-start mt-3 ml-3" id="backButton">
                <button class="text-4xl">
                    <i class="bi bi-arrow-left-circle-fill text-dark"></i>
                </button>
            </div>
            <div class="max-w-screen-xl mx-auto mt-10 p-4 text-white flex flex-col min-h-screen" id="dashboard">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Kode</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
                <div class="flex justify-center mt-4">
                    <button type="submit"  id="createItemButton" class="w-25 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">CREATE BARANG</button>
                </div>
            </div>
        `;
    }
}
