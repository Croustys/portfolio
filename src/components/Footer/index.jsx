import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Barabás Ákos
			<small className={Styles.byline}>Built by Barabás Ákos</small>
		</footer>
	);
}
export default Footer;
