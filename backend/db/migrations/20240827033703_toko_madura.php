<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class TokoMadura extends AbstractMigration
{
    public function up(): void
    {
        $this->table("master_user", ["id" => false, "primary_key" => ["kode_user"]])
            ->addColumn("kode_user", "integer", ["identity" => true])  // Auto-increment if needed
            ->addColumn("Username", "string")
            ->addColumn("Email", "string")
            ->addColumn("password", "string")
            ->addColumn("created_at", "timestamp", ["default" => "CURRENT_TIMESTAMP"])
            ->addIndex(["Email", "Username"], ["unique" => true])
            ->create();

        $this->table("master_kategori", ["id" => false, "primary_key" => ["kode_kategori"]])
            ->addColumn("kode_kategori", "integer", ["identity" => true])  // Auto-increment if needed
            ->addColumn("nama_kategori", "string")
            ->addColumn("url_gambar", "string")
            ->create();

        $this->table("master_barang", ["id" => false, "primary_key" => ["kode_barang"]])
            ->addColumn("kode_barang", "integer", ["identity" => true])  // Auto-increment if needed
            ->addColumn("kode_kategori_id", "integer")
            ->addColumn("nama_barang", "string")
            ->addColumn("keterangan_detail", "text")  // Added type
            ->addColumn("Satuan", "integer")
            ->addColumn("Diskon", "integer")
            ->addForeignKey("kode_kategori_id", "master_kategori", "kode_kategori")
            ->create();

        $this->table("master_gambar", ["id" => false, "primary_key" => ["kode_gambar"]])
            ->addColumn("kode_gambar", "integer", ["identity" => true])  // Auto-increment if needed
            ->addColumn("kode_barang_id", "integer")
            ->addColumn("varian", "string")
            ->addColumn("url_gambar", "string")
            ->addColumn("harga", "integer")
            ->addColumn("jumlah_stok", "integer")
            ->addForeignKey(["kode_barang_id"], "master_barang", "kode_barang")
            ->create();

        $this->table("master_rating", ["id" => false, "primary_key" => ["kode_rating"]])
            ->addColumn("kode_rating", "integer", ["identity" => true])  // Auto-increment here
            ->addColumn("kode_barang_id", "integer")
            ->addColumn("nilai", "integer")
            ->addForeignKey(["kode_barang_id"], "master_barang", "kode_barang")
            ->create();
    }

    public function down(): void
    {
        $this->execute("DROP TABLE master_user");
        $this->execute("DROP TABLE master_kategori");
        $this->execute("DROP TABLE master_gambar");
        $this->execute("DROP TABLE master_barang");
        $this->execute("DROP TABLE master_rating");
    }
}
