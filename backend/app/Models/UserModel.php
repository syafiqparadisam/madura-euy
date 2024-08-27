<?php

namespace rafi\backend\Models;
use rafi\backend\Core\DB;
use PDO;

class UserModel extends DB {
	public function insertUser($user, $email, $password) {
		try {
		$query = $this->getConn()->prepare("INSERT INTO master_user (Username, Email, Password) values (?,?,?)");
		$query->execute([$user, $email, $password]);

		$result = $query->fetch(PDO::FETCH_ASSOC);
		return $result;
		} catch (\PDOException $e) {
			echo $e->getMessage();
		}
	}

	public function checkToken($token) {
		$query = $this->getConn()->prepare("SELECT token from master_user where token = ?");
		$query->execute([$token]);

		$result = $query->fetch(PDO::FETCH_ASSOC);
		return $result;
	}
}