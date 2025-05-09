import './Brand.css';

function Brands() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-8 text-center">
                        <h2 className="display-4 fw-bold">Marcas con las que he trabajado</h2>
                        <p className="lead text-muted">He tenido el privilegio de colaborar con marcas increíbles.</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 card-ig-profile">
                            <div className="card-body text-center">
                                <img src="https://picsum.photos/id/237/200/300" alt="Nombre de la Marca 1" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                                <h3 className="card-title fw-semibold">Marca XYZ</h3>
                                <p className="card-text text-muted">@marcaxyz</p>
                                <a href="https://www.instagram.com/nombredeusuario1" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Ver en Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 card-ig-profile">
                            <div className="card-body text-center">
                                <img src="https://loremflickr.com/320/240?random=2" alt="Nombre de la Marca 2" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                                <h3 className="card-title fw-semibold">Marca 2</h3>
                                <p className="card-text text-muted">@marca_2</p>
                                <a href="https://www.instagram.com/nombredeusuario2" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Ver en Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 card-ig-profile">
                            <div className="card-body text-center">
                                <img src="https://cataas.com/cat" alt="Nombre de la Marca 3" className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                                <h3 className="card-title fw-semibold">Gatitos</h3>
                                <p className="card-text text-muted">@gatitos</p>
                                <a href="https://www.instagram.com/nombredeusuario3" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Ver en Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Brands;
