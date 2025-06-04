import * as utils from '../utils';
import './Portfolio.css';

function Portfolio({ portfolio }) {
    return (
      <div className="container-fluid fh5co-portfolio section-bg-accent1" id="portafolio">
        <div className="container">
          <h2 className="h2 fw-bold">{ portfolio.title }</h2>
          <p className="lead text-muted">{ portfolio.description }</p>
          <div className="row">
            { portfolio.images.map((image, index) => (
              <div key={'portfolio-img-'+index} className="col-6 col-md-4 col-lg-3 gallery-item">
                <img src={utils.assetUrl(image.url)} alt={image.title} class="img-fluid" />
                <div className="overlay">
                  <h5>{image.title}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="row my-5">
            <div className="col-12 text-center">
              <h4>Muchos hacen lo mismo. Tú vas a destacar.</h4>
              <br />
              <h4>¿Trabajamos juntos?</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Portfolio;
