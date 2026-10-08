import image from '../assets/Images/girl-coding.png'
import resume from '../assets/files/Delfin_Resume.pdf'

export default function Home() {

  const certifications = [
    {
      id: 1,
      date: "Nov 2025 to Jun 2026",
      title: "Python Full Stack Web Development",
      place: "ThinkWorks Infotech, Marthandam",
      text: "Python, Django, SQL, RESTful APIs, and full stack application development.",
    },
  ];

  const skills = [
    {
      id:1,
      technology: "HTML5",
      value: 90
    },
    {
      id:2,
      technology: "CSS3",
      value: 80
    },
    {
      id:3,
      technology: "JavaScript",
      value: 70
    },
    {
      id:4,
      technology: "Bootstrap",
      value: 60
    },
    {
      id:5,
      technology: "React",
      value: 50
    },
    {
      id:6,
      technology: "Python",
      value: 50
    },
    {
      id:7,
      technology: "Django",
      value: 50
    },
    {
      id:8,
      technology: "REST API",
      value: 50
    },
    {
      id:9,
      technology: "SQL",
      value: 70
    },
    {
      id:10,
      technology: "Git/GitHub",
      value: 70
    },
    {
      id:11,
      technology: "WordPress",
      value: 80
    },
    {
      id:12,
      technology: "Responsive Design",
      value: 90
    },
  ];

  const education = [
    {
      id: 1,
      date: "2019 to 2023",
      title: "B.E. Computer Science Engineering",
      place: "St. Xavier's Catholic College of Engineering",
    },
  ];

  const testimonials = [
    {
      id: 1,
      owner: "Artorra",
      text:"I had a really good experience working on my website. All my requirements were carefully understood and fulfilled, and the project was completed ahead of the expected deadline, which was impressive.I’m very happy with the final result. I would definitely recommend the service to others looking for reliable and professional website development."
    },
  ];


  const experience = [
    {
      id: 1,
      date: "July 2026 to present",
      title: "WordPress Developer — Freelance",
      text: "Designed, built, and launched a responsive WordPress website for Vadivam Architects & Builders, owning the project from planning to delivery.",
    },
    {
      id: 2,
      date: "Oct 2025 to Nov 2025",
      title: "Web Developer Intern — Corizo",
      text: "Built responsive websites using HTML, CSS, and JavaScript and gained hands-on exposure to Git and GitHub workflows.",
    },
    {
      id: 3,
      date: "Oct 2023 to Aug 2025",
      title: "Associate Lead Engineer — Vintorix Private Limited",
      text: "Managed campaign databases with structured data validation and quality checks, resolved data issues through root-cause analysis, and delivered performance reports.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Movie Search App",
      description:
        "A React movie browsing app that fetches popular movies from the TMDB REST API using async/await. It has real-time search filtering and a dynamic movie details page built with React Router, styled with Bootstrap.",
      live: "https://frontend-movie-search.vercel.app/",
      github: "https://github.com/Delfin22072001/Frontend-MovieSearch",
    },
    {
      id: 2,
      title: "Quiz Website",
      description:
        "A fully responsive, multi-page quiz website built with HTML5, CSS3, JavaScript, and Bootstrap. It includes dynamic score calculation and a Play Again option that restarts the quiz without reloading the page.",
      live: "https://frontend-quiz-seven-ochre.vercel.app/",
      github: "https://github.com/Delfin22072001/Frontend_Quiz",
    },
    {
      id: 3,
      title: "Vadivam Architects & Builders",
      description:
        "A complete business website built for a construction firm on WordPress, with a responsive design for mobile, tablet, and desktop. I owned the project end to end, from planning and development to launch.",
      live: "https://vadivamarchitectsandbuilders.com/",
    },
  ];

  return (
    <>
      <div className="container">

        {/* hero section */}
        <section>
          <div className="hero-contents d-flex justify-content-center align-items-center p-3">
            <div className="contents">
              <h5 className='text-white'>Hi, I'm Delfin</h5>
              <h1 className='mb-3'>Full Stack Developer | React.js | Python & Django | WordPress</h1>
              <p>A developer who turns ideas into fast, responsive web applications. I build interfaces with React.js and power them with Python, Django, and SQL, and I develop WordPress websites for small businesses and clients. Clean code, user-friendly design, and reliable delivery are what I focus on in every project. I'm available for full-time roles and freelance work, so let's build something great together.</p>
              <div className="d-flex gap-2">
                <a className="btn btn-outline-primary" href="#projects">View Projects</a>
                <a href={resume} download="Delfin_Resume.pdf" className='btn btn-success'>Download CV</a>
              </div>
              <div className="my-3 d-flex gap-3">
                <a href="https://github.com/Delfin22072001/" target="_blank"><i className="fa-brands fa-github fs-4"></i></a>
                <a href="https://www.linkedin.com/in/delfin-d-839876227/" target="_blank"><i className="fa-brands fa-linkedin fs-4"></i></a>
              </div>
            </div>
            <div>
              <img src={image} alt="Girl Coding" style={{ width: "500px", paddingLeft: "20px" }} />
            </div>
          </div>
        </section>

        {/* about section*/}
        <section id="about" className="my-5 p-3">
          <h2 className="my-5">About me</h2>
          <p>I'm a Full Stack Developer who enjoys building web applications that are fast, responsive, and easy to use. On the front end I work with HTML5, CSS3, JavaScript, React.js, and Bootstrap. On the back end I use Python, Django, REST APIs, and SQL.</p>
          <p>Before moving into development, I spent two years as an Associate Lead Engineer in email marketing and campaign operations. There I managed campaign databases, ran data validation and quality checks, and tracked performance. That work taught me to debug carefully, think analytically, and work with cross-functional teams, and I bring those habits to every project.</p>
          <p>I've built projects such as a React movie search app using the TMDB API and a multi-page quiz website, and I've delivered a complete WordPress website for a client as a freelancer. I'm always learning, and I'm looking for a role where I can grow as a developer and contribute to real products.</p>
        </section>

        {/* skills */}
        <section id="skills" className="my-2 p-2">
          <h2 className="my-5">Skills</h2>
          <div className="d-flex flex-wrap gap-2">
            {
              skills.map((skill, _) => {
                return (
                  <div key={skill.id} className="skill-section">
                    <div className="tech-label d-flex justify-content-between">
                      <button className="btn btn-outline-primary">{skill.technology}</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="my-5 p-2">

          <div className="experience-column">
            <h2 className="my-5">Experience</h2>
            <div className="experience-container d-flex flex-column gap-3">
              {experience.map((work, _) => (
                <div key={work.id} className="my-section">
                  <span className="circle"></span>
                  <p className="year">{work.date}</p>
                  <h5 className="job-title">{work.title}</h5>
                  <p className="work">{work.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* certification */}
        <section id="certification" className="p-2">
          <h2 className="my-5">Certification</h2>
          <div className="details-container">
            {certifications.map((item, _) => (
              <div key={item.id} className="my-section">
                <span className="circle"></span>
                <p className="year">{item.date}</p>
                <h4>{item.title}</h4>
                <p>{item.place}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* education */}
        <section id="education" className="p-2">
          <h2 className="my-5">Education</h2>
          <div className="details-container">
            {education.map((item, _) => (
              <div key={item.id} className="my-section">
                <span className="circle"></span>
                <p className="year">{item.date}</p>
                <h4>{item.title}</h4>
                <p>{item.place}</p>
              </div>
            ))}
          </div>
        </section >

        {/* projects */}
        <section id="projects" className="my-5 p-2">
          <h2 className="my-5">Projects</h2>
          <div className="d-flex flex-wrap gap-4">
            {
              projects.map((project, _) => {
                return (
                  <div key={project.id} className="project-section">
                    <h5>{project.title}</h5>
                    <p className="desc">{project.description}</p>
                    <div className="d-flex gap-3">
                      <a className="btn btn-outline-primary w-50" target="_blank" href={project.live}>Live</a>
                      {project.github && (
                        <a className="btn btn-success w-50" target="_blank" href={project.github}>GitHub</a>
                      )}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className="my-5 p-2">
          <h2 className="my-5">Testimonials</h2>
          <div className="d-flex flex-wrap gap-4">
            {
              testimonials.map((review, _) =>{
                return(
                  <div key={review.id} className="testimonial-section m-auto">                  
                    <p className="text-center"><i className="fa-solid fa-quote-left fs-1 text-white"></i>&nbsp;&nbsp;{review.text}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="my-5 p-2">
          <h2 className="my-5">Contact</h2>

          <div className="text-center mb-5">
            <h3 className="text-white">Let's build something together</h3>
            <p className="text-secondary">Open to full-time Frontend and Full Stack roles, and freelance WordPress projects.</p>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.linkedin.com/in/delfin-d-839876227/" target="_blank" className="btn btn-outline-primary">LinkedIn</a>
              {/* <a href="https://wa.me/918300957074?text=Hi%20Delfin%2C%20I%20saw%20your%20portfolio" target="_blank" className="btn btn-success">WhatsApp</a> */}
              <a href="mailto:delfin22072002@gmail.com" className="btn btn-outline-primary">Email</a>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}
