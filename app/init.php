<?php

namespace madura;
require_once __DIR__ . "/../vendor/autoload.php";
use madura\App\Router;
use madura\Controllers\Home;
use madura\Controllers\NotFound;
use madura\Controllers\Upload;
use madura\Controllers\User;
use madura\Controllers\Product;
use Dotenv\Dotenv;

$rootDir = dirname(__DIR__, 2);
$dotenv = Dotenv::createImmutable($rootDir);
$envFilepath = $rootDir . ".env";
if (file_exists($envFilepath)) {
	$dotenv->load();
}

Router::add("GET", "/", Product::class, "index");
Router::add("GET", "/login", User::class, "loginForm");
Router::add("GET", "/api/v1/product/popular", Upload::class, "showPopular");
Router::add("GET", "/api/v1/product/promo", Upload::class, "showPromo");
Router::add("GET", "/api/v1/product/([0-9a-zA-Z]*)", Upload::class, "showProductById");
Router::add("POST", "/api/v1/user", User::class, "login");
Router::add("GET", "/api/v1/user/product", Product::class, "getProductByUser");
Router::run();