import './Features.css';

function Features({ features }) {

    function getIconClassName(icon, style) {
        return [icon, "text-"+style, "h1", "mb-3"].join(" ");
    }
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-8 text-center">
                        <h2 className="display-4 fw-bold">{ features.title }</h2>
                        <p className="lead text-muted">{ features.description }</p>
                    </div>
                </div>
                <div className="row g-4"> 
                { features.services.map((service, index) => (
                    <div key={"feature-"+index} className="col-md-6 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <i className={getIconClassName(service.icon, service.style)}></i>
                                <h3 className="card-title fw-semibold">{ service.title }</h3>
                                <p className="card-text text-muted">{ service.text }</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
