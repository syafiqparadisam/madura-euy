<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class TokoMadura extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change(): void
    {
        $this->table("master_user", ["id" => false, "primary_key" => ["kode_user"]])
            ->addColumn("kode_user", "integer")
            ->addColumn("Username", "string")
            ->addColumn("Email", "string")
            ->addColumn("password", "string")
            ->addIndex(["Email", "Username"], ["unique" => true])
            ->addColumn("created_at", "timestamp")->create();

        $this->table("master_kategori", ["id" => false, "primary_key" => ["kode_kategori"]])
            ->addColumn("kode_kategori", "integer")
            ->addColumn("nama_kategori", "string")
            ->addColumn("url_gambar", "string")
            ->create();


        $this->table("master_barang", ["id" => false, "primary_key" => ["kode_barang"]])
            ->addColumn("kode_barang", "integer")
            ->addColumn("kode_kategori", "integer")
            ->addColumn("nama_barang", "string")
            ->addColumn("keterangan_detail")
            ->addColumn("Satuan", "integer")
            ->addColumn("Diskon", "integer")
            ->addForeignKey("kode_kategori", "master_kategori", "kode_kategori")
            ->create();

        $this->table("master_gambar", ["id" => false, "primary_key" => ["kode_gambar"]])
            ->addColumn("kode_gambar", "integer")
            ->addColumn("kode_barang", "integer")
            ->addColumn("varian", "string")
            ->addColumn("url_gambar", "string")
            ->addColumn("harga", "integer")
            ->addColumn("jumlah_stok", "integer")
            ->addForeignKey("kode_barang", "master_barang", "kode_barang")
            ->create();

        $this->table("master_rating", ["id" => false, "primary_key" => ["kode_rating"]])
            ->addColumn("kode_rating", "integer", ["identity" => true])
            ->addColumn("kode_barang", "integer")
            ->addColumn("nilai", "integer")
            ->addForeignKey("kode_barang", "master_barang", "kode_barang")
            ->create();
    }
}
