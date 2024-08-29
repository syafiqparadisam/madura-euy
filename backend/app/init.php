<?php

namespace rafi\backend;
require_once __DIR__."/../vendor/autoload.php";
use rafi\backend\App\Router;
use rafi\backend\Controllers\Upload;
use rafi\backend\Controllers\User;
use rafi\backend\Controllers\Product;

Router::add("GET","/api/v1/product", Upload::class,"showAllProducts");
Router::add("GET","/api/v1/product/popular", Upload::class,"showPopular");
Router::add("GET", "/api/v1/product/promo", Upload::class, "showPromo");
Router::add("GET","/api/v1/product/([0-9a-zA-Z]*)", Upload::class,"showProductById");
Router::add("POST", "/api/v1/user", User::class, "login");
Router::add("GET", "/api/v1/user/product", Product::class, "getProductByUser");
Router::run();