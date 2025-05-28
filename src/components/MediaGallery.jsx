import NavBar from "./NavBar";
import Home from "../pages/Home";

function MediaGallery() {
  return (
    <div className="container-fluid p-0">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          {/* Brand or logo */}
          <a className="navbar-brand fw-bold" href="#">Movie Library</a>

          {/* Toggler for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible nav links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex gap-3">
              <NavBar />
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Heading */}
      <div className="container my-4">
        <h1 className="text-center fw-bold display-6 mb-4">📚 Movie Library</h1>

       
      </div>
    </div>
  );
}

export default MediaGallery;
