<?php

namespace madura\Controllers;
use madura\Core\Controller;

class NotFound extends Controller {
	public function index() {
		$this->views("Error/404");
	}
}