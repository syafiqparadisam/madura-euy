import { showBigProduct, showPromoProduct, showSmallProduct } from "./home.js";
import Home from "./views/Home.js";
import Products from "./views/Product.js";
import ProductId from "./views/ProductId.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/product", view: Products },
    { path: "/product/:id", view: ProductId },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", async () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
  $("#promoProduct").css("width", "400px");
  await showBigProduct();
  await showPromoProduct();
  await showSmallProduct();
});

$("#goHome").on("click", () => {
  window.location.href = "/";
});

$("#searchInput").on("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("searching");
  }
});

$("#searchInput").on("change", () => {
    
})

$("#searchIcon").on("click", () => {
  console.log("searching icon");
});
