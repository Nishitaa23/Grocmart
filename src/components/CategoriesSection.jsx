import { CATEGORIES } from '../data/productsData.js';

export default function CategoriesSection() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading"> product <span>categories</span> </h1>

      <div className="box-container">
        {CATEGORIES.map((category, index) => (
          <div key={index} className="box">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>upto 45% off</p>
            <a href="#products" className="btn">shop now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

