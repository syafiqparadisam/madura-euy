<?php
namespace madura\Core;
use PDO;

class DB {
	public $db;
	public function __construct() {
		$this->db = new PDO("mysql:host=localhost;dbname=dbtokomadura", "root");
	}

	public function getConn() {
		return $this->db;
	}
}