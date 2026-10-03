
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container pt-3">
          <a className="navbar-brand" href="#">
            <h4 className="fw-bold">DELFIN D</h4>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto gap-3">
              <a id="nav-active" className="nav-link" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#experience">Experience & Certification</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}
