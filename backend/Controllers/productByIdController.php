<?php

namespace Controllers;

class ProductByIdController
{
    public function getProductById($id)
    {
        // Example data, normally you'd fetch this from a database
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
}
