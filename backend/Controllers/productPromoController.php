<?php
namespace Controllers;

class ProductPromoController
{
    public function getPromoProducts()
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
}
