<?php

namespace rafi\backend\Core;

class Controller
{
    public function model(string $model)
    {
        $modelClass = "\\rafi\\backend\\Models\\$model";
        if (class_exists($modelClass)) {
            return new $modelClass;
        }

        throw new \Exception('Model $model not found');
    }

    public function views(string $path, $data = []) {
        extract($data);
        require_once __DIR__ . "/../Views/$path.php";
    }
}
