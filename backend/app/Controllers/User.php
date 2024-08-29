<?php
namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;
use rafi\backend\Utils\Response;
use rafi\backend\Utils\Token;

class User extends Controller
{
	public function login()
	{
		// echo $username;

		$requestBody = file_get_contents('php://input');

		// Optionally, if you're expecting JSON, decode it
		$data = json_decode($requestBody, true);

		$email = $data["email"];
		$password = $data["password"];
		$username = $data["username"];


		if ($username != "admin" && $password != "12345678") {
			$response = new Response(400, "Username and password is wrong", null);
			echo $response->create();
			return;
		}

		$model = $this->model("UserModel");
		$model->insertUser($username, $email, $password);
		
		$response = new Response(200, "Successfully login");
		echo $response->create();
	}
}