import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = `Portfolio Contact from ${name}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href = `mailto:suryabonam4@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact">

      <span className="contact-subtitle">
        GET IN TOUCH
      </span>

      <h2>
        Let's Connect
      </h2>

      <p className="contact-description">
        Have a project idea or want to discuss an opportunity?
        Feel free to reach out.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Contact Me</h3>

          <p>
            I'm always open to discussing new projects, opportunities,
            and ideas.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>suryabonam4@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>Andhra Pradesh, India</span>
          </div>

          <div className="contact-item">
            <strong>GitHub</strong>
            <span>github.com/suryabonam</span>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;