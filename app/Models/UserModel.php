<?php

namespace madura\Models;
use madura\Core\DB;
use PDO;

class UserModel extends DB
{
	public function insertUser($user, $password)
	{
		try {
			$query = $this->getConn()->prepare("INSERT INTO user (username, password) values (?,?)");
			$query->execute([$user, $password]);

			$result = $query->fetch(PDO::FETCH_ASSOC);
			return $result;
		} catch (\PDOException $e) {
			echo $e->getMessage();
		}
	}

	public function updatetoken($token, $kodeUser)
	{
		$query = $this->getConn()->prepare("UPDATE user SET token = ? WHERE kode_user = ?");
		$query->execute([$token, $kodeUser]);

		$result = $query->fetch(PDO::FETCH_ASSOC);
		echo $result;
	}

	public function getKodeUserByName($kodeUser)
	{
		$query = $this->getConn()->prepare("select kode_user from user where name");
		$query->execute([$kodeUser]);

		$result = $query->fetch(PDO::FETCH_ASSOC);
		echo $result;
	}

	public function checkToken($token)
	{
		$query = $this->getConn()->prepare("SELECT token from master_user where token = ?");
		$query->execute([$token]);

		$result = $query->fetch(PDO::FETCH_ASSOC);
		return $result;
	}
}