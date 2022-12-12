# Guide

Sebenarnya hal utama yang akan dilakukan adalah membuat aplikasi React berdasarkan tampilan pada challenge sebelumnya. Untuk mengkonversi HTML yang sebelumnya telah dibuat, kalian dapat menggunakan [HTML to JSX](https://magic.reactjs.net/htmltojsx.htm) untuk mengkonversi HTML ke JSX (uncheck "Create class").

Route yang digunakan adalah sebagai berikut:

- `/` untuk halaman utama (home) atau landing page.
- `/cars` untuk halaman list mobil.

Komponen halaman yang digunakan adalah sebagai berikut:

- `Home` untuk halaman utama (home) atau landing page.
- `Cars` untuk halaman list mobil. (Komponen ini akan mengkonsumsi API untuk mendapatkan data mobil. Kemudian, komponen ini akan menampilkan data mobil yang telah diambil dari API. Komponen ini juga akan menampilkan filter mobil berdasarkan tipe driver, tanggal, waktu, dan kapasitas penumpang.)

Komponen tersebut nantinya akan digunakan pada route yang telah ditentukan di atas. Untuk membuat route, kalian dapat menggunakan `react-router-dom`.

Redux yang digunakan adalah sebagai berikut:

- `cars` untuk menyimpan data mobil.? belum tau
- `filter` untuk menyimpan data filter.? belum tau

# Challenge

## Membuat aplikasi React berdasarkan tampilan pada challenge sebelumnya.

Untuk mengkonversi HTML yang sebelumnya telah dibuat, kalian dapat menggunakan [HTML to JSX](https://magic.reactjs.net/htmltojsx.htm) untuk mengkonversi HTML ke JSX (uncheck "Create class").

## Memecah tampilan menjadi komponen-komponen yang reusable (opsional).

Untuk memecah tampilan menjadi komponen-komponen yang reusable, kalian dapat memisahkan berdasarkan tampilan yang sama. Misalnya, untuk header, kalian dapat membuat komponen Header yang dapat digunakan di berbagai halaman.

## Mengkonsumsi API menggunakan axios.

Untuk mengkonsumsi API menggunakan axios berdasarkan repository [https://github.com/synrgy-5-fsw-1-cihuy/challenge-7-dummy-server](https://github.com/synrgy-5-fsw-1-cihuy/challenge-7-dummy-server) sebagai server dummy untuk API yang digunakan. API yang digunakan adalah sebagai berikut:

- `GET /api/cars` untuk mendapatkan list car.

## Membuat filter mobil berdasarkan tipe driver, tanggal, waktu, dan kapasitas penumpang.

Kalian dapat menggunakan cara yang sama seperti pada challenge sebelumnya untuk membuat filter mobil berdasarkan tipe driver, tanggal, waktu, dan kapasitas penumpang. Kalian dapat menggunakan state untuk menyimpan data filter yang telah diinputkan oleh user. Kemudian, kalian dapat menggunakan state tersebut untuk melakukan filter pada data mobil yang telah diambil dari API.

Untuk membuat filter mobil, kalian dapat menggunakan state management seperti redux untuk menyimpan data mobil yang telah diambil dari API. Kemudian, kalian dapat membuat filter berdasarkan tipe driver, tanggal, waktu, dan kapasitas penumpang?

## Menggunakan state management (redux) untuk menyimpan data mobil?

Untuk menggunakan state management, kalian dapat menggunakan redux untuk menyimpan data mobil yang telah diambil dari API. Kemudian, kalian dapat membuat filter berdasarkan tipe driver, tanggal, waktu, dan kapasitas penumpang?
