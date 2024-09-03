
CREATE TABLE master_user (
    kode_user INTEGER AUTO_INCREMENT PRIMARY KEY, 
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
	token varchar(255),
    Password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
 
CREATE TABLE master_kategori (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    kode_kategori INTEGER,
    nama_kategori VARCHAR(255) NOT NULL,
    url_gambar VARCHAR(255)
);
 

CREATE TABLE master_barang (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    kode_barang INTEGER,
    kode_kategori INTEGER,
    nama_barang VARCHAR(255) NOT NULL,
    keterangan_detail VARCHAR(255),
    satuan INTEGER,
    diskon INTEGER,
    FOREIGN KEY (kode_kategori) REFERENCES master_kategori(id) -- Foreign key constraint
);

CREATE TABLE master_gambar (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    kode_gambar INTEGER,
    kode_barang INTEGER,  -- Foreign key to master_barang
    varian VARCHAR(255),
    url_gambar VARCHAR(255),
    harga INTEGER,
    jumlah_stok INTEGER,
    FOREIGN KEY (kode_barang) REFERENCES master_barang(id) -- Foreign key constraint,
);

  create table master_rating (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      kode_rating INTEGER,
    kode_barang INTEGER,  -- Foreign key to master_barang
    nilai INTEGER,
    FOREIGN KEY (kode_barang) REFERENCES master_barang(id) -- Foreign key constraint
  );
  