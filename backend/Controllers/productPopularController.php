<?php

namespace Controllers;

class ProductPopularController
{
    public function getPopularProducts()
    {
        // Example data, normally you'd fetch this from a database
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
}
