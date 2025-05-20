import { useEffect, useState } from 'react';
import * as utils from '../utils';

function RecentWork({ gallery }) {
    return (
        <div className="container-fluid fh5co-recent-work section-bg-light">
            <VideoGallery gallery={gallery} />
        </div>
    );
}

function VideoGallery({ gallery }) {

  useEffect(() => {
    const UIHelper = global['UIHelper'];
    UIHelper.initCarousel('#gallery-carousel', {
      nav: false,
      responsive:{
        0:{
          items:3,
          nav:false,
        },
        600:{
          items:4,
          nav:false
        },
        1000:{
          items:6,
          nav:false,
          loop:false
        }
      }
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = gallery.items[currentIndex];

  
  return (
      <div className="container-fluid fh5co-recent" id="recientes">
        <div className="container">
            <h2>{ gallery.title }</h2>
            <div className="row">
                <div className="col-12"></div>
                <div className="videoContainer">
                    <VideoItem item={currentVideo} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div id="gallery-carousel" className="owl-carousel owl-carousel2 owl-theme">
                    { gallery.items.map((item, index) => (
                        <div key={"gallery-image-"+index} className="card">
                            <img src={utils.assetUrl(item.thumbnail)} className="img-thumbnail" alt={"Thumb " + item.title} />
                        </div>
                    )) }
                    </div>
                </div>
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

function VideoItem({item}) {
  return (
    <>
      <div className="card-video-overlay">
        <div className="bottom-text">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.caption }</p>
        </div>
      </div>
      <video width="100%" height="500" controls>
        <source src={utils.assetUrl(item.url)} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </>
  );
}

export default RecentWork;
