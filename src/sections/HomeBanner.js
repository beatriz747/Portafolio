import * as utils from '../utils';

function HomeBanner() {
    return (
        <>
        <div className="container-fluid fh5co-home-banner">
            <div className="card">
                <img className="card-img" src={utils.assetUrl('img/banner-img.jpg')} alt="" />
                <div className="card-img-overlay">
                    <div className="center-text">
                        <h2 className="card-title">A camera is the save button for the mind's eye</h2>
                        <a href="/" className="btn btn-outline-danger">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid fh5co-two-img">
            <div className="row">
                <div className="col-sm-6 pr-0 pl-0">
                    <div className="card">
                        <img className="card-img" src={utils.assetUrl('img/girl1.jpg')} alt="" />
                        <div className="card-img-overlay"> </div>
                    </div>
                </div>
                <div className="col-sm-6 pr-0 pl-0">
                    <div className="card">
                        <img className="card-img" src={utils.assetUrl('img/girl2.jpg')} alt="" />
                        <div className="card-img-overlay"> </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeBanner;
