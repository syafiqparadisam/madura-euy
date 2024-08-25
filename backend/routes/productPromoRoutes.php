<?php

use \Controllers\ProductPromoController;

$router->get('/api/v1/product/promo', function() {
    $controller = new ProductPromoController();
    echo $controller->getPromoProducts();
});
