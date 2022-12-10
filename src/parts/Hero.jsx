import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="main" className="pt-md-4 mb-5 bg-gray">
      <div className="container">
        <div className="row row-cols-md-2 row-cols-1 gy-4">
          <div className="align-self-center px-md-2 p-4">
            <h1 className="fs-1 fw-bold">
              Sewa &amp; Rental Mobil Terbaik di kawasan Pelaihari
            </h1>
            <p className="w-75 py-2">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link
              to="/cars"
              className="btn btn-lgreen-400 fw-bold py-2 px-3 text-white">
              Mulai Sewa Mobil
            </Link>
          </div>
          <div className="align-self-center">
            <img
              src="./assets/img/car_with_bg.png"
              className="w-100"
              alt="Car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
