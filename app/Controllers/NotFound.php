<?php

namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;

class NotFound extends Controller {
	public function index() {
		$this->views("Error/404");
	}
}