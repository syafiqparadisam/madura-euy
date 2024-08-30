import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Create item");
    }

    async getHtml() {
        return `
        <div class="text-start mt-3 ml-3" id="backButton">
            <button class="text-4xl">
                <i class="bi bi-arrow-left-circle-fill text-dark"></i>
            </button>
        </div>
        <div class="max-w-screen-xl mx-auto mt-10 p-4 flex flex-col min-h-screen" id="createItem">
            <section class="w-full flex justify-center items-center">
                <div class="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create barang
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="text" name="kode" id="kode" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kode barang" required="">
                            </div>
                            <div>
                                <label for="satuan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">nama Kategori</label>
                                <select name="kategori" id="kategori" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                    <option value="kategori">Bahan pokok</option>
                                    <option value="kategori">Bahan masak</option>
                                    <option value="kategori">alat kebersihan</option>
                                    <option value="kategori">Makanan dan minuman</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" name="nama" id="nama" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama barang" required="">
                            </div>
                            <div>
                                <input type="text" name="keterangan" id="keterangan" placeholder="keterangan detail" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <div>
                                <input type="text" name="diskon" id="diskon" placeholder="diskon" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <div>
                                <label for="satuan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Satuan</label>
                                <select name="satuan" id="satuan" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                    <option value="pcs">Pcs</option>
                                    <option value="box">Box</option>
                                    <option value="kg">Kg</option>
                                    <option value="liter">Liter</option>
                                </select>
                            </div>
                            <button type="submit" onclick="window.location.href='/SubmitItem';" class="w-50 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>   
        `;
    }
}
