<?php

namespace rafi\backend\Controllers;
use rafi\backend\Utils\Response;
use rafi\backend\Core\Controller;

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
        $result = $this->model("UploadModel")->upload();
        header("Content-type: Application/json");
        echo json_encode($result);
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
