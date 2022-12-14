# Challenge 7 Guide

Tujuan dari repository ini adalah sebagai contoh untuk membuat aplikasi dengan React berdasarkan [CASE](./CASE.md) yang telah disediakan. Jadi tidak boleh disalin secara utuh, tapi kalian harus membuat aplikasi dengan beberapa modifikasi agar tidak terlalu mirip dengan contoh ini.

Tolong baca [CASE](./CASE.md) untuk informasi lebih lanjut.

Tolong baca [GUIDE](./GUIDE.md) untuk informasi lebih lanjut.

API Menggunakan repository [https://github.com/synrgy-5-fsw-1-cihuy/challenge-7-dummy-server](https://github.com/synrgy-5-fsw-1-cihuy/challenge-7-dummy-server) sebagai server dummy untuk API yang digunakan.

## About

Terdapat 2 folder yang dapat kalian lihat di dalam folder utama aplikasi ini:

- `src/`
- `public/`

Folder `src/` berisi kode-kode yang digunakan untuk membuat aplikasi ini.
Folder `public/` berisi file statis yang digunakan untuk membuat aplikasi ini.

## Libraries / Dependencies

- [React](https://reactjs.org/)

Digunakan untuk membuat aplikasi ini menggunakan React.

- [React Redux](https://react-redux.js.org/) (Soon)

Digunakan untuk mengatur state aplikasi menggunakan Redux.

- [React Router DOM](https://reactrouter.com/web/guides/quick-start)

Digunakan untuk mengatur routing di dalam aplikasi ini.

- [React Bootstrap](https://react-bootstrap.github.io/) (opsional, kalian dapat menggunakan library lain untuk membuat tampilan aplikasi ini)

Digunakan untuk membuat tampilan aplikasi ini menggunakan React Bootstrap.

## Pemecahan Komponen

Pemecahan komponen dilakukan dengan memisahkan komponen-komponen yang ada di dalam aplikasi menjadi beberapa folder. Pemecahan komponen bergantung pada kebutuhan aplikasi. Pemecahan komponen yang baik adalah pemecahan komponen yang mempermudah pengembangan aplikasi. Cara pemecahan komponen pada repository ini bukan merupakan cara yang terbaik jadi silahkan melakukan pemecahan komponen sesuai dengan kebutuhan aplikasi.

## How react-router-dom works

React Router DOM adalah library yang digunakan untuk mengatur routing di dalam aplikasi ini.
Routing adalah proses mengatur alur dari aplikasi kita.
Misalnya, kita memiliki halaman home dan halaman about.
Kita dapat mengatur routing di dalam aplikasi kita agar ketika kita mengakses halaman home, maka kita akan diarahkan ke halaman home.
Ketika kita mengakses halaman about, maka kita akan diarahkan ke halaman about.

Untuk mengatur routing di dalam aplikasi kita, kita dapat menggunakan komponen `BrowserRouter` dari library `react-router-dom`.

- `Link` digunakan untuk membuat link ke route yang sudah dibuat di dalam aplikasi ini.
- `Route` digunakan untuk membuat route di dalam aplikasi ini dan dapat digunakan sebagai child dari `Routes`.
- `Routes` digunakan sebagai membungkus semua route di dalam aplikasi ini.
- `BrowserRouter` digunakan untuk membuat routing di dalam aplikasi ini menggunakan browser history API.

## Folder Structure

```
public/
????????? index.html
????????? favicon.ico
src/
????????? components/
????????? pages/
????????? App.js
????????? index.js
????????? style.css
```

# FAQ

- Apakah dapat menggunakan bootstrap biasa yang bukan react-bootstrap?

Bisa, kalian juga dapat menggunakan frameworkcss lain untuk membuat tampilan aplikasi ini.

- Apakah dapat menggunakan library lain selain yang sudah disebutkan di atas?

Bisa, kalian bebas menggunakan library yang kalian inginkan sesuai dengan kebutuhan kalian.

- Apakah dapat menggunakan CSS?

Bisa, kalian bebas menggunakan CSS sesuai dengan kebutuhan kalian.
