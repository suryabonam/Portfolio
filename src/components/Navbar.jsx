import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-circle">S</div>
        <h2>Surya Sai Bonam</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn"
      >
        Resume
      </a>

    </nav>
  );
}

export default Navbar;