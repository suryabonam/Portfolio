import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

import "../styles/Hero.css";
import profile from "../images/profile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-card">

        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>

        <p className="role">
          FULL STACK DEVELOPER
        </p>

        <h2>Surya Sai Bonam</h2>

        <p className="card-text">
          Passionate Full Stack Developer with experience
          in React, Python, Flask and AI projects.
        </p>

        <div className="socials">

          <a
            href="https://www.linkedin.com/in/surya-sai-bonam-3b584627a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/suryabonam"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:suryabonam4@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>


      <div className="hero-content">

        <p className="intro">
          HELLO, I AM
        </p>

        <h1>
          Surya Sai Bonam
        </h1>

        <h3>
          Software Developer | AI & Machine Learning Enthusiast
        </h3>

        <p>
          I build responsive web applications and AI-powered
          solutions using React, Flask, Python and MySQL.
        </p>

        <div className="buttons">

          {/* View Projects */}
          <a href="#projects" className="hero-btn">
            View Projects
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-btn outline"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;