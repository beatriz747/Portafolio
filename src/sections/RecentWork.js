import { useEffect, useRef, useState } from 'react';
import * as utils from '../utils';
import './RecentWork.css';

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
      loop: false,
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
          items:5,
          nav:false
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
                <div className="col-12">
                  <VideoItem item={currentVideo} />
                </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-7 mx-auto">
                <div id="gallery-carousel" className="owl-carousel owl-carousel2 owl-theme">
                  { gallery.items.map((item, index) => (
                    <div key={"gallery-image-"+index} className="card">
                      <a href="#videoContainer" onClick={() => setCurrentIndex(index)}>
                        <img src={utils.assetUrl(item.thumbnail)} className="img-thumbnail" alt={"Thumb " + item.title} />
                      </a>
                    </div>
                  )) }
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

function VideoItem({item}) {
  const videoRef = useRef();
  useEffect(() => {    
    videoRef.current?.load();
  }, [item.url]);
  return (
    <div className="card videoContainer">
      <div className="card-body">
        <div className="card-video-overlay">
          <div className="bottom-text">
            <h5 className="card-title">{ item.title }</h5>
            <div className="card-text">{ item.caption }</div>
          </div>
        </div>
        <video width="100%" height="380" controls ref={videoRef}>
          <source src={utils.assetUrl(item.url)} type="video/mp4" />
              Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default RecentWork;
