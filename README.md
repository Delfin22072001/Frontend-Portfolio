# Delfin D | Developer Portfolio

A responsive, single-page portfolio website that showcases my skills, experience, certification, education, and projects. Built with React.js and Bootstrap.

**Live Demo:** [add your deployed link here]

## Preview

<!-- Add a screenshot of the site: ![Portfolio preview](./screenshot.png) -->

## Features

- Dark navy theme with green and blue accents and glowing card effects
- Hero section with a short introduction, project shortcut, and downloadable CV
- Skills displayed as tags
- Timeline layouts for experience, certification, and education
- Project cards with Live Demo and GitHub buttons that appear only when a link is available
- Contact section with LinkedIn, WhatsApp, and Email buttons, no form needed
- Fully responsive layout using the Bootstrap grid
- Content driven by simple arrays of objects, so updating the site means editing data, not markup

## Tech Stack

- React.js (JavaScript ES6)
- Bootstrap
- CSS3
- Font Awesome icons

## Sections

1. Hero
2. About
3. Skills
4. Experience
5. Certification
6. Education
7. Projects
8. Contact

## Getting Started

Make sure Node.js and npm are installed, then run:

```bash
git clone https://github.com/Delfin22072001/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open the local address shown in the terminal to view the site.

## Customizing the Content

- **Text content:** The `skills`, `experience`, and `projects` arrays at the top of `Home.jsx` hold the content for those sections. Add, edit, or remove objects to update the site.
- **Resume:** Replace the PDF in `src/assets/files/` with your latest resume, keeping the same file name.
- **Hero image:** Replace the image in `src/assets/Images/`.
- **Project links:** Set the `live` and `github` fields on a project. Leave a field out and its button is hidden automatically.

## Author

**Delfin D** — Full Stack Developer (React.js, Python, Django, WordPress)

Open to full-time roles and freelance WordPress projects.

- LinkedIn: [linkedin.com/in/delfin-d-839876227](https://www.linkedin.com/in/delfin-d-839876227/)
- GitHub: [github.com/Delfin22072001](https://github.com/Delfin22072001)
- Email: delfin22072002@gmail.com
