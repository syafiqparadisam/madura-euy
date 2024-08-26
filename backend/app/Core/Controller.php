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
}
