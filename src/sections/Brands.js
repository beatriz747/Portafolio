import * as utils from '../utils';
import './Brand.css';

function Brands({ brands }) {
    return (
        <section className="container-fluid fh5co-brands section-bg-light" id="marcas">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-8 text-center">
                        <h2 className="h2 fw-bold">{ brands.title }</h2>
                        <p className="lead text-muted">{ brands.description }</p>
                    </div>
                </div>
                <div className="row g-4">
                    { brands.items.map((item, index) => (
                        <div key={"brand-"+index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 card-ig-profile">
                                <div className="card-body text-center">
                                    <img src={utils.assetUrl(item.image)} alt={item.username} className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                                    <h3 className="card-title fw-semibold">{ item.name }</h3>
                                    <p className="card-text text-muted">{item.username}</p>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Ver en Instagram</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brands;
