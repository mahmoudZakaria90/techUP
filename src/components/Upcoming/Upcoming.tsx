import css from "./upcoming.module.css";
const Upcoming = () => (
  <section className="section">
    <h2>Upcoming</h2>
    <p className={css.upcomingText}>
      Event #1<br></br>
      <a href="">
        <span className="highlighted">
          Mall of Berlin, Leipziger Pl. 12, 10117 Berlin
        </span>
      </a>
      <p>
        Starting from: <span className="highlighted">5:00 pm - 6:00pm</span>
      </p>
    </p>
  </section>
);

export default Upcoming;
