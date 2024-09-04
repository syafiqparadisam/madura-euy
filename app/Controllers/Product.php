<?php

namespace madura\Controllers;
use madura\Core\Controller;

class Product extends Controller
{

    public function promo()
    {

    }

    public function popular()
    {

    }

    public function index()
    {
        $model = $this->model("ProductModel");
        $promo = $model->getPromoProduct();
        $popular = $model->getPopularProduct();
        $big = $model->getBigProduct();

        $data = [
            "promo"=> $promo,
            "popular" => $popular,
            "big" => $big
        ];

        $this->views("Home/Home", $data);
    }

    public function allProduct()
    {

    }

    public function details($id)
    {


    }

    public function search($params)
    {
        print_r($params);
        echo $params["search"];
    }

    public function largeDiscount()
    {
    }


    public function getProductByUser()
    {
        $headers = getallheaders();

        if (!isset($headers["token"])) {
            $response = new Response(400, "Unknown user");
            echo $response->create();
            return;
        }

        $token = $headers["token"];
        $userExist = $this->model("UserModel")->checkToken($token);

        if ($userExist) {
            $result = $this->model("ProductModel")->getProductByUser($token);
            $response = new Response(200, "Successfully get product by category", $result);
            echo $response->create();
        } else {

            $response = new Response(200, "Unknown user");
            echo $response->create();
        }


    }
}
