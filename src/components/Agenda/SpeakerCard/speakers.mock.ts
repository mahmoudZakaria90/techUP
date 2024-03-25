import gh from "../../../assets/github-mark.svg";
import reddit from "../../../assets/reddit-mark.svg";
import linkedin from "../../../assets/linkedin-mark.png";
import peter from "../../../assets/peterparker.jpeg";

export interface ISpeaker {
  name: string;
  title: string;
  photo?: string;
  schedule: string;
  socials?: Array<ISpeakerSocials>;
}

interface ISpeakerSocials {
  name: string;
  icon: string;
}

export const speakers: Array<ISpeaker> = [
  {
    name: "Peter Parkers",
    title: "Sr UI Designer @dummyData",
    photo: peter,
    schedule: "5:00pm",
    socials: [
      { name: "github", icon: gh },
      { name: "linkedin", icon: linkedin },
      { name: "reddit", icon: reddit },
    ],
  },
  {
    name: "Peter Parker",
    title: "Engineering manager @Zalando",
    photo: peter,
    schedule: "5:30pm",
    socials: [
      { name: "github", icon: gh },
      { name: "linkedin", icon: linkedin },
      { name: "reddit", icon: reddit },
    ],
  },
  {
    name: "Peter Parkersss",
    title: "Sr FE lead @heycar",
    photo: peter,
    schedule: "6:00pm",
    socials: [
      { name: "github", icon: gh },
      { name: "linkedin", icon: linkedin },
      { name: "reddit", icon: reddit },
    ],
  },
];
