import * as utils from '../utils';

function Portfolio() {
    return (
        <div className="container-fluid recent fh5co-portfolio" id="portfolio">
    <div className="container">
      <h2>Portfolios</h2>
      <div className="row">
        <div className="bx bx-1">
          <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img1.png')} alt="" />
            <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
              <div className="bottom-text">
                <h5 className="card-title">Natural site</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-2">
        <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img2.png')} alt="" />
        <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
              <div className="bottom-text">
                <h5 className="card-title">Vacation special photography</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-3">
        <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img3.png')} alt="" />
        <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
              <div className="bottom-text">
                <h5 className="card-title">Product photography</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-4">
        <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img4.png')} alt="" />
        <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
              <div className="bottom-text">
                <h5 className="card-title">Historical place shots</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-middle" style={{padding: 0}}>
          <div className="bx bx-5">
          <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img5.png')} alt="" />
          <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
                <div className="bottom-text">
                  <h5 className="card-title">Lorem ipsum dolor</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="bx bx-6">
          <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img6.png')} alt="" />
          <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
                <div className="bottom-text">
                  <h5 className="card-title">Lorem ipsum dolor</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bx bx-7">
            <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img7.png')} alt="" />
            <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Portraits</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="bx bx-8">
            <div className="card"> <img className="card-img" src={utils.assetUrl('img/portfolio-img8.png')} alt="" />
            <div className="card-img-overlay"> <a href="#"><img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" /></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Wedding photography</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default Portfolio;
