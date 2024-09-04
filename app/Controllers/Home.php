<?php
namespace madura\Controllers;
use madura\Core\Controller;

class Home extends Controller {
	public function index() {
		$this->views("Home/Home", "");
	}
}