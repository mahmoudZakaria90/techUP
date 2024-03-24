import css from "./header.module.css";

const Header = () => (
  <header>
    <h1>techUP</h1>
    <p className={css.headerSubText}>
      A<span className="highlighted">stand-up comedy</span> for techies.
    </p>
  </header>
);

export default Header;
