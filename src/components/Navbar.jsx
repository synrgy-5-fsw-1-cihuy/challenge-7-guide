import OffCanvas from "./OffCanvas";
import Navigation from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <nav id="navbar" className="navbar navbar-expand-lg py-3 bg-gray">
        <div className="container">
          <Link className="navbar-brand ms-0" to="/">
            <img src="./assets/img/binar.svg" alt="Binar Rental Car" />
          </Link>
          <button
            className="navbar-toggler border-0 px-0 shadow-none"
            type="button"
            onClick={() => setShow(!show)}>
            <span className="navbar-toggler-icon" />
          </button>
          <Navigation className="d-none d-lg-flex" />
          <OffCanvas
            show={show}
            onClick={() => setShow(false)}
            className="d-flex d-lg-none">
            <Navigation />
          </OffCanvas>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
