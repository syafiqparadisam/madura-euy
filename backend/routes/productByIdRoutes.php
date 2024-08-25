<?php

use \Controllers\ProductByIdController;

$router->get('/api/v1/product/{id}', function($id) {
    $controller = new ProductByIdController();
    echo $controller->getProductById($id);
});
