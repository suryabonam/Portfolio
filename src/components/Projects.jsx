import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Nearest Blood Locator",
      description:
        "A web application that helps users find nearby blood donors and blood banks based on blood group and availability.",
      technologies: ["Python", "React", "Flask", "MySQL"],
      github: "https://github.com/suryabonam",
    },
    {
      title: "Aquaculture AI Assistant",
      description:
        "An AI-powered web application designed to provide useful assistance and information for aquaculture-related problems.",
      technologies: ["Python", "React", "Flask", "MySQL", "Ollama"],
      github: "https://github.com/suryabonam",
    },
    {
      title: "Aqua Average Calculator",
      description:
        "A fish calculation web application for recording tub details, calculating fish averages, and generating organized reports.",
      technologies: ["Python", "React", "Flask", "MySQL"],
      github: "https://github.com/suryabonam",
    },
  ];

  return (
    <section id="projects" className="projects">

      <span className="projects-subtitle">
        MY WORK
      </span>

      <h2>
        Featured Projects
      </h2>

      <p className="projects-description">
        Some of the projects I have built using modern web technologies and
        AI.
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="technologies">

              {project.technologies.map((technology, techIndex) => (

                <span key={techIndex}>
                  {technology}
                </span>

              ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;