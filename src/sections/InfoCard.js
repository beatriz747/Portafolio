import { useEffect } from 'react';
import * as utils from '../utils';
import './InfoCard.css';

function InfoCard({ profile }) {
  return (
    <div className="container-fluid fh5co-recent-work">
        <ContactCard profile={profile} />
        <GalleryCards gallery={profile.gallery} />
    </div>
  );
}

function ContactCard({ profile }) {
  return (
    <div className="container contact-pop p-5">
      <div className="row">
        <div className="col-md-6 pr-0">
          <div className="card">
              <img className="card-img w-100" src={utils.assetUrl(profile.avatar)} alt="" />
              <div className="card-img-overlay"></div>
          </div>
        </div>
        <div className="col-md-6 pl-0" id="about">
          <div className="content">
              <h3>{ profile.name }</h3>
              <h4>{ profile.jobTitle }</h4>
              <hr />
              <p>{ profile.bio }</p>
              <a href="/" className="btn">CONTACTAME</a> </div>
          </div>
      </div>
    </div>
  );
}

function GalleryCards({ gallery }) {

  useEffect(() => {
    const UIHelper = global['UIHelper'];
    UIHelper.initCarousel('#gallery-carousel', {
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
      <div className="container recent" id="activity">
      <div className="row">
        <h2>{ gallery.title }</h2>
        <div id="gallery-carousel" className="owl-carousel owl-carousel2 owl-theme">
          { gallery.images.map((image, index) => (
            <div key={"gallery-image-"+index}>
              <div className="card">
                <img className="card-img" src={utils.assetUrl(image.url)} alt="" />
                <div className="card-img-overlay">
                    <a href="/">
                        <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
                    </a>
                  <div className="bottom-text">
                    <h5 className="card-title">{ image.title }</h5>
                    <p className="card-text">{ image.text }</p>
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

export default InfoCard;