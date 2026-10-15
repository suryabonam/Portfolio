import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Surya Sai Bonam</h2>

        <p>
          Full Stack Developer | AI & Machine Learning Enthusiast
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/suryabonam"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Surya Sai Bonam. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;