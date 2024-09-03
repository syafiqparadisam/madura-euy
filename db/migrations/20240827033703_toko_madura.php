<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class TokoMadura extends AbstractMigration
{
    public function up(): void
    {
        // Create user table
        $this->table('user', ['id' => false, 'primary_key' => 'kode_user'])
            ->addColumn('kode_user', 'integer', ['identity' => true])
            ->addColumn('username', 'string', ['limit' => 255])
            ->addColumn('email', 'string', ['limit' => 255])
            ->addColumn('token', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('password', 'string', ['limit' => 255])
            ->addColumn('createdAt', 'timestamp', ['default' => 'CURRENT_TIMESTAMP'])
            ->create();

        // Create kategori table
        $this->table('kategori', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_kategori', 'integer', ['null' => true])
            ->addColumn('nama_kategori', 'string', ['limit' => 255])
            ->addColumn('url_gambar', 'string', ['limit' => 255, 'null' => true])
            ->create();

        // Create barang table
        $this->table('barang', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_barang', 'integer', ['null' => true])
            ->addColumn('kode_kategori', 'integer')
            ->addColumn('nama_barang', 'string', ['limit' => 255])
            ->addColumn('keterangan_detail', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('satuan', 'integer', ['null' => true])
            ->addColumn('diskon', 'integer', ['null' => true])
            ->addForeignKey('kode_kategori', 'kategori', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
            ->create();

        // Create gambar table
        $this->table('gambar', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_gambar', 'integer', ['null' => true])
            ->addColumn('kode_barang', 'integer')
            ->addColumn('varian', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('url_gambar', 'string', ['limit' => 255, 'null' => true])
            ->addColumn('harga', 'integer', ['null' => true])
            ->addColumn('jumlah_stok', 'integer', ['null' => true])
            ->addForeignKey('kode_barang', 'barang', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
            ->create();

        // Create rating table
        $this->table('rating', ['id' => false, 'primary_key' => 'id'])
            ->addColumn('id', 'integer', ['identity' => true])
            ->addColumn('kode_rating', 'integer', ['null' => true])
            ->addColumn('kode_barang', 'integer')
            ->addColumn('nilai', 'integer', ['null' => true])
            ->addForeignKey('kode_barang', 'barang', 'id', ['delete' => 'NO_ACTION', 'update' => 'NO_ACTION'])
            ->create();
    }
    
    public function down(): void
    {
        $this->execute("DROP TABLE gambar");
        $this->execute("DROP TABLE rating");
        $this->execute("DROP TABLE barang");
        $this->execute("DROP TABLE kategori");
        $this->execute("DROP TABLE user");
    }
}
