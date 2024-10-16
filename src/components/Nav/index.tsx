import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a
        className={Styles.logolink}
        href="/"
        aria-label="Link to the home page"
      >
        <div className={Styles.monogram}>BA</div>
      </a>
      <a
        className={Styles.link}
        href="/"
        aria-label="Link to the home page"
      >
        Home
      </a>
      <a
        className={Styles.link}
        href="/projects"
        aria-label="Link to Portfolio"
      >
        Portfolio
      </a>
      <a className={Styles.link} href="/about" aria-label="Link to About me">
        About
      </a>
      <a
        className={Styles.social}
        href="https://www.linkedin.com/in/%C3%A1kos-barab%C3%A1s-93921022b/"
        aria-label="Link to Linkedin Profile"
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          className={Styles.socialicon}
          x="0px"
          y="0px"
          viewBox="0 0 455 455"
          fill="enable-background:new 0 0 455 455;"
        >
          <g>
            <path
              fill="fill-rule:evenodd;clip-rule:evenodd;"
              d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
            />
            <path
              fill="fill-rule:evenodd;clip-rule:evenodd;"
              d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z"
            />
          </g>
        </svg>
      </a>
      <a
        className={Styles.social}
        href="https://github.com/croustys"
        aria-label="Link to Github profile"
      >
        <svg
          className={Styles.socialicon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        className={Styles.social}
        href="https://dev.to/croustys"
        aria-label="Link to Dev.to Profile"
      >
        <svg
          className={Styles.socialicon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 40"
          fill="enable-background:new 0 0 50 40"
          xmlSpace="preserve"
        >
          <path d="M15.7 15.5c-.4-.3-.7-.4-1.1-.4h-1.7v10.1h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.7c0-.6-.2-1-.6-1.3z" />
          <path d="M47 0H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM19.1 23.5c0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.3 1.3h-4.4V12.3h4.5c1.3 0 2.4.4 3.2 1.3.8.8 1.3 1.9 1.3 3.2v6.7zm9.1-8.4h-5.1v3.6h3.1v2.8h-3.1v3.7h5.1V28h-5.9c-.6 0-1-.2-1.4-.6-.4-.4-.6-.8-.6-1.4V14.2c0-.6.2-1 .6-1.4.4-.4.8-.6 1.4-.6h5.9v2.9zM37.5 26c-.6 1.3-1.3 2-2.2 2-.9 0-1.7-.7-2.2-2l-3.7-13.8h3.1L35.3 23l2.8-10.8h3.1L37.5 26z" />
        </svg>
      </a>
    </nav>
  );
}
export default Nav;
