<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class TokoMadura extends AbstractMigration
{
    public function up(): void
    {
        // Create master_user table
        $this->table('master_user', ['id' => false, 'primary_key' => 'kode_user'])
            ->addColumn('kode_user', 'integer', ['identity' => true])
            ->addColumn('Username', 'string', ['limit' => 255])
            ->addColumn('Email', 'string', ['limit' => 255])
            ->addColumn('token', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('Password', 'string', ['limit' => 255])
            ->addColumn('createdAt', 'timestamp', ['default' => 'CURRENT_TIMESTAMP'])
            ->create();

        // Create master_kategori table
        $this->table('master_kategori', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_kategori', 'integer', ['null' => true])
            ->addColumn('nama_kategori', 'string', ['limit' => 255])
            ->addColumn('url_gambar', 'string', ['limit' => 255, 'null' => true])
            ->create();

        // Create master_barang table
        $this->table('master_barang', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_barang', 'integer', ['null' => true])
            ->addColumn('kode_kategori', 'integer')
            ->addColumn('nama_barang', 'string', ['limit' => 255])
            ->addColumn('keterangan_detail', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('satuan', 'integer', ['null' => true])
            ->addColumn('diskon', 'integer', ['null' => true])
            ->addForeignKey('kode_kategori', 'master_kategori', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
            ->create();

        // Create master_gambar table
        $this->table('master_gambar', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_gambar', 'integer', ['null' => true])
            ->addColumn('kode_barang', 'integer')
            ->addColumn('varian', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('url_gambar', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('harga', 'integer', ['null' => true])
            ->addColumn('jumlah_stok', 'integer', ['null' => true])
            ->addForeignKey('kode_barang', 'master_barang', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
            ->create();

        // Create master_rating table
        $this->table('master_rating', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_rating', 'integer', ['null' => true])
            ->addColumn('kode_barang', 'integer')
            ->addColumn('nilai', 'integer', ['null' => true])
            ->addForeignKey('kode_barang', 'master_barang', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
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
