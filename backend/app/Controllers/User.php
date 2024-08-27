<?php
namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;
use rafi\backend\Utils\Response;

class User extends Controller {
	public function login() {
		$username = $_POST["username"];
		$password = $_POST["password"];

		if ($username != "admin" && $password != "12345678") {
			$response = new Response(400, "Username and password is wrong", null);
			echo $response->create();
			return;
		}

		$result = $this->model()->insertUser();
	}


}