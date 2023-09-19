import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Barabás Ákos
      <small className={Styles.byline}>2132 Göd, Ménesi utca 16</small>
      <small className={Styles.byline}>58469598</small>
      <small className={Styles.byline}>48185686-1-33</small>
      <small className={Styles.byline}>Built by Barabás Ákos</small>
    </footer>
  );
}
export default Footer;
