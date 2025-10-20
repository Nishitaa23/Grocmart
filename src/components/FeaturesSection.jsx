export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <h1 className="heading"> our <span>features</span> </h1>

      <div className="box-container">
        <div className="box">
          <img src="/image/feature-img-1.png" alt="fresh and organic" />
          <h3>fresh and organic</h3>
          <p>Fresh vegetables and fruits in cheap price.</p>
          <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
          <img src="/image/feature-img-2.png" alt="free delivery" />
          <h3>free delivery</h3>
          <p>We always do fast delivery on our customers.</p>
          <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
          <img src="/image/feature-img-3.png" alt="easy payments" />
          <h3>easy payments</h3>
          <p>It is very easy to pay on our website, you can pay easily.</p>
          <a href="#" className="btn">read more</a>
        </div>
      </div>
    </section>
  );
}

