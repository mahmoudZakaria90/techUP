import css from "./header.module.css";

const Header = () => (
  <header>
    <h1>
      <span>tech</span>
      <span>U</span>
      <span>P</span>
    </h1>
    <p className={`${css.headerSubText} highlighted`}>
      A<span className="">stand-up comedy</span> for techies.
    </p>
  </header>
);

export default Header;
