import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    return `
    <div class="w-full justify-center align-center">
        <div class="text-start mt-3 ml-3" id="backButton">
        <button class="text-4xl">
            <i class="bi bi-arrow-left-circle-fill text-dark"></i>
        </button>
    </div>
    <div class="max-w-screen-xl mx-auto mt-10 p-4 flex flex-col min-h-screen" id="login">
        <section class="w-full flex justify-center items-center">
            <div class="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:spasce-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        LOGIN
                    </h1>
                    <div class="space-y-4 md:space-y-6">
                         <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                            <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="yourusername">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="password" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                        </div>
                        <i id="toRegister" class="fw-lighter fs-6 color-secondary cursor-pointer"><a class="pointer-events-auto">Don't have an account yet?</a></i>
                        <button id="submitBtn"  class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
                    </div>
                </div>
            </div>
        </section>
    </div>   
    </div>
        `;
  }
}
