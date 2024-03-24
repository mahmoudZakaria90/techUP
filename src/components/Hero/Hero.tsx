import css from "./hero.module.css";

const Hero = () => (
  <section className="section">
    <h2>Wanna be a speaker?</h2>
    <p className={css.heroText}>Easy! join us now</p>
    <button type="button">Become a speaker</button>
  </section>
);

export default Hero;
