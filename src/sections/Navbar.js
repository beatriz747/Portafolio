
function Navbar() {

    function toggleMenu() {

    }
    
    return(
        <nav className="navbar navbar-expand-md fixed-top maine-menu">
            <div className="container">
            <button className="navbar-toggler ml-auto" data-target="#my-nav" onClick={() => toggleMenu()} data-toggle="collapse">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item active"> <a className="nav-link" href="/">Inicio</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#recientes" tabIndex="-1" aria-disabled="true">Trabajos</a></li>
                <li className="nav-item"> <a className="nav-link" href="#servicios" tabIndex="-1" aria-disabled="true">Servicios</a></li>
                <li className="nav-item"> <a className="nav-link" href="#marcas" tabIndex="-1" aria-disabled="true">Marcas</a></li>
                <li className="nav-item"> <a className="nav-link" href="#portafolio" tabIndex="-1" aria-disabled="true">Portafolio</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;