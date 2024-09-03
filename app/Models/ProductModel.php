<?php
namespace rafi\backend\Models;
use PDO;
use rafi\backend\Core\DB;
// use PDO;

class ProductModel extends DB
{
	public function getPromoProduct() {	
		$product = $this->getConn()->prepare("");
	}

	public function getPopularProduct() {

	}

	public function getBigProduct() {

	}

	public function getProductByUser($token)
	{
		$sql = $this->getConn()->prepare("SELECT mb.kode_barang, mb.nama_barang, mk.nama_kategori, mg.harga FROM master_user mu JOIN master_barang mb ON mu.kode_user = mb.kode_kategori JOIN master_kategori mk ON mb.kode_kategori = mk.kode_kategori JOIN master_gambar mg ON mb.kode_barang = mg.kode_barang WHERE mu.token = ?");
		$sql->execute([$token]);

		$rsult = $sql->fetch(PDO::FETCH_ASSOC);
		return $rsult;
	}
}
