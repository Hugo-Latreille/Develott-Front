import "./testimonial.scss";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-container container">
        <div className="testimonial-container-left"></div>
        <div className="testimonial-container-right">
          <h2 className="testimonial-title">
            Comme eux, rejoignez la communauté Develott !
          </h2>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <a href="#" className="main-button-colored mr-1">
            S'inscrire
          </a>
          <a href="#" className="main-button-bg-colored mr-1">
            Parcourir les projets
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
