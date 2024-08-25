<?php

use \Controllers\ProductPopularController;

$router->get('/api/v1/product/popular', function() {
    $controller = new ProductPopularController();
    echo $controller->getPopularProducts();
});
