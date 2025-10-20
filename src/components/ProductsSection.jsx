import { PRODUCTS } from '../data/productsData.js';

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <h1 className="heading"> our <span>products</span> </h1>

      {/* First row of products */}
      <div className="product-slider">
        <div className="swiper-wrapper" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', padding: '1rem'}}>
          {PRODUCTS.slice(0, 4).map(product => (
            <div key={product.id} className="box">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price"> ${product.price}/- - 10.99/- </div>
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

      {/* Second row of products */}
      <div className="product-slider">
        <div className="swiper-wrapper" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', padding: '1rem'}}>
          {PRODUCTS.slice(4, 10).map(product => (
            <div key={product.id} className="box">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price"> ${product.price}/- - 10.99/- </div>
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

