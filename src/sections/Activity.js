import { useEffect } from 'react';
import * as utils from '../utils';

function Activity() {

  useEffect(() => {
    const UIHelper = global['UIHelper'];
    UIHelper.initCarousel('#activity-carousel', {
      nav: false,
      responsive:{
        0:{
          items:2,
          nav:false,
        },
        600:{
          items:2,
          nav:false
        },
        1000:{
          items:3,
          nav:false,
          loop:false
        }
      }
    });
  }, []);

    return (
        <div className="container-fluid fh5co-recent-work activity">
    <div className="container recent">
      <div className="row">
        <h2>Activity of the month</h2>
        <div id="activity-carousel" className="owl-carousel owl-carousel3 owl-theme">
          <div>
            <div className="card"> <img className="card-img" src={utils.assetUrl('img/activity-img1.png')} alt="" />
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="/">Read more <img src={utils.assetUrl('img/double-right.svg')} alt="" /></a> 
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card"> <img className="card-img" src={utils.assetUrl('img/activity-img2.png')}  alt="" />
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="/">Read more <img src={utils.assetUrl('img/double-right.svg')} alt="" /></a> 
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card"> <img className="card-img" src={utils.assetUrl('img/activity-img3.png')} alt="" />
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="/">Read more <img src={utils.assetUrl('img/double-right.svg')} alt="" /></a> 
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

export default Activity;
