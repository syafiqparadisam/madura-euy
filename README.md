# Toko kelontong Madura

## Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk mengatur dan menjalankan proyek ini di lingkungan Windows:

1. **Unduh dan Instal Node.js**
   - Kunjungi situs resmi [Node.js](https://nodejs.org/).
   - Pilih versi LTS atau Current yang sesuai dengan sistem Anda:
     - **64-bit (x64)**: Untuk sistem operasi Windows 64-bit.
     - **32-bit (x86)**: Untuk sistem operasi Windows 32-bit.
   - Unduh installer dan jalankan file yang diunduh untuk memulai proses instalasi.

2. **Tambahkan Node.js ke Path Environment Variables**
   - Buka **Control Panel** dan pilih **System and Security** > **System**.
   - Klik **Advanced system settings** di sisi kiri.
   - Di jendela **System Properties**, klik tombol **Environment Variables**.
   - Di bagian **System variables**, temukan variabel yang bernama **Path** dan klik **Edit**.
   - Tambahkan path ke folder instalasi Node.js, misalnya: `C:\Program Files\nodejs\`.
   - Klik **OK** untuk menyimpan perubahan.

3. **Verifikasi Instalasi Node.js**
   - Buka **Command Prompt** (cmd) atau **PowerShell**.
   - Jalankan perintah berikut untuk memverifikasi instalasi Node.js:
     ```sh
     node -v
     npm -v
     ```
     Perintah ini akan menampilkan versi Node.js dan npm yang terinstal.
4. **Navigasikan ke direktori proyek menggunakan perintah `cd`. Misalnya:**

    ```sh
     cd path\to\your\project
     ```
5. **Install dependensi**
    ```sh
    npm install
    ```

6. **Running server**
   ```
   node server.js
   ```
   Atau
   ```sh
   npm start
   ```
7. **Buka web browser dan akses `http://localhost:3000` untuk melihat aplikasi Anda.**

8. **JIka port 3000 conflict, ubah variabel port di server.js, dan buka web browser ke `localhost:port`**