import { REVIEWS } from '../data/productsData.js';

export default function ReviewSection() {
  return (
    <section className="review" id="review">
      <h1 className="heading"> customer's <span>review</span> </h1>

      <div className="review-slider">
        <div className="swiper-wrapper" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', padding: '1rem'}}>
          {REVIEWS.map(review => (
            <div key={review.id} className="box">
              <img src={review.image} alt={review.name} />
              <p>{review.text}</p>
              <h3>{review.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

