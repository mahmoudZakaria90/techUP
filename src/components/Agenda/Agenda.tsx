import css from "./agenda.module.css";

import { speakers } from "./SpeakerCard/speakers.mock";
import SpeakerCard from "./SpeakerCard/SpeakerCard";

const Agenda = () => (
  <section className={css.agenda}>
    <h2>Agenda</h2>
    <p className="highlighted">Our lovely speakers</p>
    <div className={css.agendaWrapper}>
      {speakers?.length &&
        speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
    </div>
  </section>
);

export default Agenda;
