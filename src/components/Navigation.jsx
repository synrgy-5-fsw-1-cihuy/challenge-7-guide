import clsx from "clsx";
import { Link } from "react-router-dom";

const Navigation = ({ className }) => {
  return (
    <ul
      className={clsx("navbar-nav px-3 ms-lg-auto me-auto me-lg-0", className)}>
      <li className="nav-item px-sm-3 px-1">
        <a className="nav-link text-black" href="#service">
          Our Services
        </a>
      </li>
      <li className="nav-item px-sm-3 px-1">
        <a className="nav-link text-black" href="#why-us">
          Why Us
        </a>
      </li>
      <li className="nav-item px-sm-3 px-1">
        <a className="nav-link text-black" href="#testimonials">
          Testimonial
        </a>
      </li>
      <li className="nav-item px-sm-3 px-1">
        <a className="nav-link text-black" href="#faq">
          FAQ
        </a>
      </li>
      <li className="buton ps-sm-3 ps-1">
        <Link
          className="btn btn-lgreen-400 text-white fw-bold mt-lg-0 mt-3"
          to="/register">
          Register
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
