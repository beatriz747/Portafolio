
function Navbar() {
    return(
        <nav className="navbar navbar-expand-md fixed-top maine-menu">
            <div className="container">
            <button className="navbar-toggler ml-auto" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"> <span className="bar1"></span> <span className="bar2"></span> <span className="bar3"></span> </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item active"> <a className="nav-link" href="/">Inicio</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#recientes" tabindex="-1" aria-disabled="true">Trabajos</a></li>
                <li className="nav-item"> <a className="nav-link" href="#servicios" tabindex="-1" aria-disabled="true">Servicios</a></li>
                <li className="nav-item"> <a className="nav-link" href="#marcas" tabindex="-1" aria-disabled="true">Marcas</a></li>
                <li className="nav-item"> <a className="nav-link" href="#portafolio" tabindex="-1" aria-disabled="true">Portafolio</a></li>
                <li className="nav-item"> <a className="nav-link" href="#testimonial" tabindex="-1" aria-disabled="true">Testimonios</a></li>
                <li className="nav-item"> <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contacto</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;