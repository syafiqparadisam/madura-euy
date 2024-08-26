<?php

namespace rafi\backend;
require_once __DIR__."/../vendor/autoload.php";
use rafi\backend\App\Router;
use rafi\backend\Controllers\Upload;

Router::add("GET","/product", Upload::class,"showAllProducts");
Router::add("GET","/product/popular", Upload::class,"showPopular");
Router::add("GET", "/product/promo", Upload::class, "showPromo");
Router::add("GET","/product/([0-9a-zA-Z]*)", Upload::class,"showProductById");
Router::run();