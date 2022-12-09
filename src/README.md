# Folder Structure

```
src/
├── components/
├── pages/
├── App.js
├── index.js
└── style.css
```

## App.js

File `App.js` berisi komponen utama dari aplikasi. Komponen ini akan di-render oleh file `index.js`. Komponen ini juga berfungsi sebagai komponen induk dari komponen-komponen yang ada di dalam aplikasi. Komponen ini juga berfungsi sebagai komponen yang mengatur routing di dalam aplikasi menggunakan React Router DOM.

### Contoh

```js
// src/App.js

import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
```

Kode di atas memuat komponen `AboutPage`, `HomePage`, dan `ProfilePage` yang berada di dalam folder pages. Komponen ini akan di-render oleh komponen induk `App.js` ketika user mengakses halaman-halaman tersebut melalui URL browser yang sesuai dengan path yang ditentukan.

```js
<Route index element={<HomePage />} />
```

Ketika browser mengakses URL `/`, maka komponen halaman `HomePage` akan di-render. `index` pada kode di atas berfungsi sebagai path yang akan di-render ketika user mengakses URL `/`.

```js
<Route path="/about" element={<AboutPage />} />
```

Ketika browser mengakses URL `/about`, maka komponen halaman `AboutPage` akan di-render.

```js
<Route path="/profile" element={<ProfilePage />} />
```

Ketika browser mengakses URL `/profile`, maka komponen halaman `ProfilePage` akan di-render.

## index.js

File `index.js` berisi kode untuk menginisialisasi aplikasi. File ini juga berfungsi sebagai file yang menghubungkan antara `App.js` dengan aplikasi yang dijalankan di browser (`index.html`).

## Components

Folder components berisi komponen-komponen yang digunakan di dalam aplikasi. Komponen-komponen ini dapat berupa komponen yang berisi tampilan, komponen yang berisi tampilan dan fungsi, dan lain-lain.

Kalian dapat membuat komponen seperti header, footer, button, navlink, card, dan lain-lain di dalam folder ini. Kompenen yang dibuat sebaiknya berupa komponen yang reusable, sehingga dapat digunakan kembali di dalam aplikasi.

## Pages

Folder pages berisi komponen-komponen yang berisi tampilan dan fungsi. Komponen-komponen ini berfungsi sebagai halaman-halaman yang ada di dalam aplikasi. Komponen-komponen ini akan di-render oleh komponen induk `App.js`. Komponen-komponen ini juga berfungsi sebagai komponen induk dari komponen-komponen yang ada di dalam aplikasi.

Setiap file merepresentasikan sebuah halaman. File-file ini akan di-import oleh komponen induk `App.js` dan di-render ketika user mengakses halaman-halaman tersebut melalui URL browser yang sesuai dengan path yang ditentukan.

# Additional

## Layout

Kalian dapat membuat sebuah layout yang akan selalu dirender di dalam aplikasi. Layout ini dapat berupa header, footer, sidebar, dan lain-lain. Layout ini dapat dibuat di dalam folder `components` dan di-import oleh komponen induk `App.js` untuk dirender di dalam aplikasi.

### Contoh

```js
// src/App.js

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
```

Kode di atas memuat komponen `Header` dan `Footer` yang berada di dalam folder components. Komponen ini akan di-render oleh komponen induk `App.js` sebelum komponen-komponen halaman di-render. Jadi setiap halaman yang di-render akan memiliki header dan footer yang sama di dalam aplikasi tersebut.

## CSS

Kalian dapat menggunakan CSS untuk mengatur tampilan aplikasi. Kalian dapat menggunakan CSS yang sudah ada di dalam folder `public` atau menggunakan CSS yang sudah diinstall melalui NPM.

### Contoh

```js
// src/App.js

import { Route, Routes } from "react-router-dom";

import "./style.css";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
```

Kode di atas memuat file `style.css` yang berada di dalam folder `src`. File ini berisi kode CSS yang akan digunakan untuk mengatur tampilan aplikasi.
