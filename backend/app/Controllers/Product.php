<?php

namespace rafi\backend\Controllers;
use rafi\backend\Utils\Response;
use rafi\backend\Core\Controller;

class Product extends Controller
{

    public function promo()
    {
        // Example data, normally you'd fetch this from a database
        $promoProducts = [
            [
                'id' => 1,
                'title' => 'Promo Product 1',
                'image' => [
                    'https://cloudinary.com/images/1',
                    'https://cloudinary.com/images/2',
                ],
                'price' => 10000
            ],
            // Add more promo products here
        ];

        if (!empty($promoProducts)) {
            return json_encode([
                'statusCode' => 200,
                'data' => $promoProducts,
                'message' => 'Success Get Promo Product'
            ]);
        } else {
            return json_encode([
                'statusCode' => 404,
                'data' => null,
                'message' => 'Product is empty'
            ]);
        }
    }

    public function popular()
    {
        $popularProducts = [
            [
                'id' => 1,
                'title' => 'Popular Product 1',
                'image' => [
                    'https://cloudinary.com/images/1',
                    'https://cloudinary.com/images/2',
                ],
                'price' => 10000
            ],
            // Add more popular products here
        ];

        if (!empty($popularProducts)) {
            return json_encode([
                'statusCode' => 200,
                'data' => $popularProducts,
                'message' => 'Success Get Popular Product'
            ]);
        } else {
            return json_encode([
                'statusCode' => 404,
                'data' => null,
                'message' => 'Product is empty'
            ]);
        }
    }

    public function index()
    {
        $result = $this->model("UploadModel")->upload();
        header("Content-type: Application/json");
        echo json_encode($result);
    }

    public function allProduct()
    {
        $allProducts = [
            [
                "id" => 1,
                "title" => "Product Title",
                "image" => [
                    "https://cloudinary.com/images/1",
                    "https://cloudinary.com/images/2",
                    "https://cloudinary.com/images/3",
                    "https://cloudinary.com/images/4"
                ],
                "rating" => 5,
                "stock" => 999,
                "price" => 10000
            ],
        ];

        if (!empty($allProducts)) {
            return json_encode([
                'statusCode' => 200,
                'data' => $allProducts,
                'message' => 'Success Get All Product'
            ]);
        } else {
            return json_encode([
                'statusCode' => 404,
                'data' => null,
                'message' => 'Product is empty'
            ]);
        }
    }

    public function details($id)
    {
        $products = [
            1 => [
                'id' => 1,
                'title' => 'Product Title',
                'description' => 'lorem ipsum',
                'soldTotal' => 100,
                'discount' => 30,
                'rating' => 4,
                'stock' => 999,
                'location' => 'Bangkalan',
                'image' => [
                    'https://cloudinary.com/images/1',
                    'https://cloudinary.com/images/2',
                ],
                'variants' => [
                    ['variant' => 'Coklat', 'price' => 10000],
                ]
            ]
        ];

        if (isset($products[$id])) {
            return json_encode([
                'statusCode' => 200,
                'data' => $products[$id],
                'message' => "Success Get Product with id {$id}"
            ]);
        } else {
            return json_encode([
                'statusCode' => 404,
                'data' => null,
                'message' => "Product with id {$id} not found"
            ]);
        }
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

        if (!isset($headers["user"])) {
            $response = new Response(400, "Unknown user");
            echo $response->create();
            return;
        }

        $user = $headers["user"];
        $result = $this->model("ProductModel")->getProductByUser($user);
        
        $response = new Response(200, "Successfully get product by category", $result);
        echo $response->create();
    }
}
