import css from "./joinUs.module.css";

const JoinUs = () => (
  <section className={`${css.joinUs} bg-section`}>
    <h2>Wanna become a speaker?</h2>
    <p className={css.joinUsText}>Easy! join us now</p>
    <button type="button">Become a speaker</button>
  </section>
);

export default JoinUs;
