import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">

      <h2>About Me</h2>

      <p>
        I'm a Full Stack Developer passionate about building modern web
        applications using React, Python, Flask, and MySQL. I also enjoy
        exploring Artificial Intelligence and Machine Learning to create
        intelligent solutions for real-world problems.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>🎓 Education</h3>
          <p>B.Tech (ECE)</p>
        </div>

        <div className="card">
          <h3>💻 Experience</h3>
          <p>Full Stack & AI Projects</p>
        </div>

        <div className="card">
          <h3>🚀 Goal</h3>
          <p>Become an AI Software Engineer</p>
        </div>

      </div>

    </section>
  );
}

export default About;