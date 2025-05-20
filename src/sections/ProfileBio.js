import { useEffect } from 'react';
import * as utils from '../utils';
import './ProfileBio.css';

function ProfileBio({ profile }) {
  return (
    <div className="container-fluid fh5co-recent-work">
      <Background />
      <ContactCard profile={profile} />
      <GalleryCards gallery={profile.gallery} />
    </div>
  );
}

function ContactCard({ profile }) {
  return (
    <div className="container contact-pop py-4">
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
              <p className="pre">{ profile.bio }</p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                <a href={"mailto:"+profile.contact.email}>{ profile.contact.email }</a>
              </p>
              <p>
                <i className="fab fa-whatsapp-square mr-2"></i>
                <a href={profile.contact.telephone.link}>{ profile.contact.telephone.text }</a>
              </p>
              <p>
                <i className="fas fa-map-marker mr-2"></i>
                { profile.contact.location }
              </p>
              <div className="social-links text-center">
                { profile.socialNetworks.map((network, index) => (
                  <a key={"sn-link-"+index} href={network.url} className="btn btn-light mr-2 mb-2" target="_blank" rel="noopener noreferrer">
                    <i className={network.icon}></i>
                  </a>
                ))}
              </div>
              <hr/>
              <div className="text-center">
                <a href="/" className="btn btn-contact">
                <i class="fas fa-download"></i> Descargar CV
                </a>
              </div>
              
          </div>
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
          items:1,
          nav:false,
        },
        600:{
          items:1,
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
      <div className="container recent" id="recientes">
      <div className="row">
        <h2>{ gallery.title }</h2>
        <div id="gallery-carousel" className="owl-carousel owl-carousel2 owl-theme">
          { gallery.images.map((item, index) => (
            <div key={"gallery-image-"+index}>
              <div className="card">
                {item.type === "image" && <GalleryImage item={item} />}
                {item.type === "video" && <GalleryVideo item={item} />}
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}

function GalleryImage({item}) {
  return (
    <>
      <img className="card-img" src={utils.assetUrl(item.url)} alt="" />
      <div className="card-img-overlay">
        <a href="/">
          <img src={utils.assetUrl('img/heart.png')} className="heart" alt="heart icon" />
        </a>
        <div className="bottom-text">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.text }</p>
        </div>
      </div>
    </>
  );
}

function GalleryVideo({item}) {
  return (
    <>
      <div className="card-video-overlay">
        <div className="bottom-text">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.text }</p>
        </div>
      </div>
      <video width="100%" height="500" controls>
        <source src={utils.assetUrl(item.url)} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </>
  );
}

function Background() {
  return (
    <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}


export default ProfileBio;