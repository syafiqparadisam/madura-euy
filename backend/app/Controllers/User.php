<?php
namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;
use rafi\backend\Utils\Response;
use rafi\backend\Utils\Token;

class User extends Controller
{
	public function login()
	{

		$requestBody = file_get_contents('php://input');

		// Optionally, if you're expecting JSON, decode it
		$data = json_decode($requestBody, true);

		// Cek apakah json_decode berhasil
		if (json_last_error() !== JSON_ERROR_NONE) {
			$response = new Response(400, "Username and password required", null);
			echo $response->create();
			exit;
		}

		
		// Cek apakah kunci yang diperlukan ada
		if (!isset($data["password"]) || !isset($data["username"])) {
			$response = new Response(400, "Username and password required", null);
			echo $response->create();
			exit;
		}

		$password = $data["password"];
		$username = $data["username"];

		if ($username != "admin" && $password != "12345678") {
			$response = new Response(400, "Username and password is wrong", null);
			echo $response->create();
			return;
		}

		$model = $this->model("UserModel");
		$model->insertUser($username, $password);

		$response = new Response(200, "Successfully login");
		echo $response->create();
	}
}