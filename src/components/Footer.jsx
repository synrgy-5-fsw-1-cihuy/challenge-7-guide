import { FiFacebook, FiInstagram, FiTwitter, FiTwitch } from "react-icons/fi";

const Footer = () => {
  const socialMedias = [
    {
      name: "Facebook",
      icon: <FiFacebook />,
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
    },
    {
      name: "Twitch",
      icon: <FiTwitch />,
    },
  ];

  const navigation = [
    {
      name: "Our Services",
      link: "#service",
    },
    {
      name: "Why Us",
      link: "#why-us",
    },
    {
      name: "Testimonial",
      link: "#testimonials",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];
  return (
    <section id="footer" className="py-5 mt-5">
      <div className="container px-4">
        <div className="row row-cols-1 row-cols-lg-4 gy-3">
          <div className="d-flex flex-column">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="d-flex flex-column">
            <ul className="list-group list-group-flush gap-2">
              {navigation.map((nav, index) => (
                <li className="d-inline-flex" key={nav.link}>
                  <a
                    href={nav.link}
                    className="text-decoration-none text-black fw-normal mb-3">
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex flex-column">
            <p>Connect with us</p>
            <div className="d-flex flex-row">
              {socialMedias.map((social, index) => (
                <div
                  className="rounded-circle bg-dblue-400 px-2 py-1 me-1"
                  key={index + social}>
                  <a className="text-white" href={`#${social}`}>
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column">
            <p>Copyright Binar 2022</p>
            <img
              className="w-25"
              src="./assets/img/binar.svg"
              alt="Binar Rental Car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
