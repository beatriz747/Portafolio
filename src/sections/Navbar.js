
function Navbar() {
    return(
        <nav className="navbar navbar-expand-md fixed-top maine-menu">
            <div className="container">
            <button className="navbar-toggler ml-auto" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"> <span className="bar1"></span> <span className="bar2"></span> <span className="bar3"></span> </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item active"> <a className="nav-link" href="/">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#about" tabindex="-1" aria-disabled="true">About</a></li>
                <li className="nav-item"> <a className="nav-link" href="#activity" tabindex="-1" aria-disabled="true">Activity</a></li>
                <li className="nav-item"> <a className="nav-link" href="#portfolio" tabindex="-1" aria-disabled="true">Portfolio</a></li>
                <li className="nav-item"> <a className="nav-link" href="#testimonial" tabindex="-1" aria-disabled="true">Testimonial</a></li>
                <li className="nav-item"> <a className="nav-link" href="blog.html" tabindex="-1" aria-disabled="true">Blog</a></li>
                <li className="nav-item"> <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;