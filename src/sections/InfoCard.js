import * as utils from '../utils';

function InfoCard() {
    return (
        <div className="container-fluid fh5co-recent-work">
            <ContactCard />
            <WorkCards />
        </div>
    );
}

function ContactCard() {
    return (
        <div className="container contact-pop">
            <div className="row">
                <div className="col-md-6  pr-0">
                <div className="card">
                    <img className="card-img w-100" src={utils.assetUrl('img/avatar.jpeg')} alt="" />
                    <div className="card-img-overlay"> </div>
                </div>
                </div>
                <div className="col-md-6 pl-0" id="about">
                <div className="content">
                    <h3>Beatriz Duque</h3>
                    <h4>Experta en Marketing Digital</h4>
                    <hr />
                    <p>Sed do eiusmod tempor incididunt ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostd exercitation ullamco laboris nisi ut aliquip ex ea mo consequat. Duis aute irure dolor in reprehenderit in ullamco.</p>
                    <a href="/" className="btn">CONTACTAME</a> </div>
                </div>
                </div>
            </div>
    );
}

function WorkCards() {
    return (
        <div className="container recent" id="activity">
        <div className="row">
          <h2>Recent works</h2>
          <div className="owl-carousel owl-carousel2 owl-theme">
            <div>
              <div className="card">
                <img className="card-img" src={utils.assetUrl('img/recent-img1.jpg')} alt="" />
                <div className="card-img-overlay">
                    <a href="/">
                        <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
                    </a>
                  <div className="bottom-text">
                    <h5 className="card-title">Model photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card"> 
                <img className="card-img" src={utils.assetUrl('img/recent-img2.jpg')} alt="" />
                <div className="card-img-overlay"> 
                    <a href="/">
                        <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
                    </a>
                  <div className="bottom-text">
                    <h5 className="card-title">Product photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <img className="card-img" src={utils.assetUrl('img/recent-img3.jpg')} alt="" />
                <div className="card-img-overlay">
                    <a href="/">
                        <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
                    </a>
                  <div className="bottom-text">
                    <h5 className="card-title">Tour and potrait</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <img className="card-img" src={utils.assetUrl('img/recent-img4.jpg')} alt="" />
                <div className="card-img-overlay">
                    <a href="/">
                        <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
                    </a>
                  <div className="bottom-text">
                    <h5 className="card-title">Classical photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InfoCard;