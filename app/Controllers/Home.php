<?php
namespace rafi\backend\Controllers;
use rafi\backend\Core\Controller;

class Home extends Controller {
	public function index() {
		$this->views("Home/Home", "");
	}
}