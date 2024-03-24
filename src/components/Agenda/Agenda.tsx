import css from "./agenda.module.css";
import gh from "../../assets/github-mark.svg";
import linkedin from "../../assets/linkedin-mark.png";
import peter from "../../assets/peterparker.jpeg";

const Agenda = () => (
  <section className={css.agenda}>
    <h2>Agenda</h2>
    <p className="highlighted">Our lovely speakers</p>
    <div className={css.agendaWrapper}>
      <div className={css.speakerCard}>
        <div className={css.speakerCardTime}>5:00pm</div>
        <div className={css.speakerCardImage}>
          <img src={peter} alt="" width="200" height="250" />
        </div>
        <div className={css.speakerCardBody}>
          <h3>Peter Parker</h3>
          <p>Frontend lead @heycar</p>
          <img src={gh} alt="" width="25" />
          <img src={linkedin} alt="" width="25" />
        </div>
      </div>
      <div className={css.speakerCard}>
        <div className={css.speakerCardTime}>5:30pm</div>
        <div className={css.speakerCardImage}></div>
        <div className={css.speakerCardBody}></div>
      </div>
      <div className={css.speakerCard}>
        <div className={css.speakerCardTime}>6:00pm</div>
        <div className={css.speakerCardImage}></div>
        <div className={css.speakerCardBody}></div>
      </div>
    </div>
  </section>
);

export default Agenda;
