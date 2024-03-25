import css from "./SpeakerCard.module.css";

import { ISpeaker } from "./speakers.mock";

const SpeakerCard = ({ speaker }: { speaker: ISpeaker }) => {
  const { name, title, schedule, photo, socials } = speaker;
  return (
    <div className={css.speakerCard} key={name}>
      <div className={css.speakerCardTime}>{schedule}</div>
      <div className={css.speakerCardImage}>
        <img src={photo} alt="" width="200" height="250" />
      </div>
      <div className={css.speakerCardBody}>
        <h3 className="highlighted">{name}</h3>
        <p>{title}</p>
        {socials?.length &&
          socials.map(({ icon }) => (
            <a href="" key={icon}>
              <img src={icon} alt="" width={25} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default SpeakerCard;
