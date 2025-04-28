import * as utils from '../utils';

function Portfolio({ portfolio }) {
    return (
      <div className="container-fluid recent fh5co-portfolio" id="portfolio">
        <div className="container">
          <h2>{ portfolio.title }</h2>
          <div className="row">
            { portfolio.images.map((image, index) => (
              <div className={'bx ' + image.layout} key={'portfolio-img-'+index}>
                <div className="card">
                  <img className="card-img" src={utils.assetUrl(image.url)} alt="" />
                  <div className="card-img-overlay">
                    <a href="/"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
                    <div className="bottom-text">
                      <h5 className="card-title">{ image.title }</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Portfolio;
