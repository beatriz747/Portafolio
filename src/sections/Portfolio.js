import * as utils from '../utils';
import './Portfolio.css';


function Portfolio({ portfolio }) {

  return (
    <div className="container-fluid fh5co-portfolio section-bg-accent1" id="portafolio">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <h2 className="h2 fw-bold">{ portfolio.title }</h2>
            <p className="lead text-muted">{ portfolio.description }</p>
          </div>
        </div>
        <div className="row">
          { portfolio.images.map((image, index) => (
            <div key={'portfolio-img-'+index} className="col-6 col-md-6 col-lg-4 gallery-item">
              <img src={utils.assetUrl(image.url)} alt={image.title} className="img-fluid" />
            </div>
          ))}
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-4 mx-auto text-center">
            <h2 className="caption">{ portfolio.featuredVideo.caption }</h2>
            <video id="featuredVideo" className="w-100" controls autoPlay>
              <source src={utils.assetUrl(portfolio.featuredVideo.source)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 text-center">
            <h3>Muchos hacen lo mismo.</h3>
            <h3 className="text-primary mb-4">Tú vas a destacar.</h3>
            <p><a href={portfolio.cta} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg">¿Trabajamos juntos?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
