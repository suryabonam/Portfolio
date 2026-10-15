import "../styles/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiFlask,
  SiMysql,
} from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaCode />, name: "VS Code" },
  ];

  return (
    <section id="skills" className="skills">

      <span className="stack">
        STACK
      </span>

      <h2>
        Technical Skills
      </h2>

      <p>
        Tools and technologies I use to build modern web applications and AI-powered solutions.
      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-box" key={index}>

            <div className="icon">
              {skill.icon}
            </div>

            <h4>{skill.name}</h4>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;