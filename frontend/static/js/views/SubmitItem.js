import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Create Item with Image Upload");
    }

    async getHtml() {
        return `
        <div class="text-start mt-3 ml-3" id="backButton">
            <button class="text-4xl">
                <i class="bi bi-arrow-left-circle-fill text-dark"></i>
            </button>
        </div>
        <div class="max-w-screen-xl mx-auto mt-10 p-4 flex flex-col min-h-screen" id="createItemWithImage">
            <section class="w-full flex justify-center items-center">
                <div class="w-full max-w-4xl bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 flex">
                    <!-- Left side form inputs -->
                    <div class="w-1/2 p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form class="space-y-4 md:space-y-6" action="#" method="post" enctype="multipart/form-data">
                            <div>
                                <input type="text" name="kodeBarang" id="kodeBarang" class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kode barang" disabled>
                            </div>
                            <div>
                                <input type="text" name="kodeGambar" id="kodeGambar" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kode gambar" disabled>
                            </div>
                            <div>
                                <input type="text" name="varian" id="varian" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="varian" disabled>
                            </div>
                            <div>
                                <input type="text" name="harga" id="harga" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="harga" disabled>
                            </div>
                            <div>
                                <input type="text" name="jumlahstok" id="junlahStok" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jumlah stok" disabled>
                            </div>
                            <button type="submit" class="w-50 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
                        </form>
                    </div>

                    <!-- Right side image upload -->
                    <div class="w-1/2 p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col items-center">
                        <label for="imageUpload" class="w-full text-center mb-2 font-medium text-gray-900 dark:text-white">Upload Images</label>
                        <input type="file" id="imageUpload" multiple="multiple" accept="image/jpeg, image/png, image/jpg">
                        <div class="w-full h-64 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 flex items-center justify-center" id="imagePreview">
                            <span class="text-gray-500 dark:text-gray-400">No images uploaded</span>
                        </div>
                        <p id="imageCounter" class="text-sm text-gray-600 dark:text-gray-400">0/4 images</p>
                    </div>
                </div>
            </section>
        </div>
 `;
    }
}
