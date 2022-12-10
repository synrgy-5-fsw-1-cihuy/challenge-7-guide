import TestimonialCard from "../../components/cards/TestimonialCard";
import RightIcon from "../../components/icons/RightIcon";
import LeftIcon from "../../components/icons/LeftIcon";

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-2 my-5">
      <div className="text-center my-5">
        <h2 className="fs-2 fw-bold">Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div
        id="wrapper-testimonials"
        className="d-flex flex-row justify-content-start wrap-testimonials">
        <TestimonialCard
          key={0 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={1 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={2 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={3 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={4 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={5 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
      </div>
      <div className="d-flex flex-row justify-content-center mt-2">
        <button
          id="slide-left"
          className="btn btn-slider border border-black p-1 rounded-circle mx-2">
          <LeftIcon />
        </button>
        <button
          id="slide-right"
          className="btn btn-slider border border-black p-1 rounded-circle mx-2">
          <RightIcon />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
