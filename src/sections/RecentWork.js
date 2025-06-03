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
      dots: false,
      responsive:{
        0:{
          items:3,
        },
        600:{
          items:4,
        },
        1000:{
          items:5,
        }
      }
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = gallery.items[currentIndex];

  function selectVideo(event, index) {
    console.log('event', event);
    event.preventDefault();
    setCurrentIndex(index);
  }
  
  return (
    <div className="container-fluid fh5co-recent" id="recientes">
      <div className="container">
        <h2>{ gallery.title }</h2>
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <VideoPlayer item={currentVideo} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <div id="gallery-carousel" className="owl-carousel owl-carousel2 owl-theme videoThumbs">
              { gallery.items.map((item, index) => (
                <div key={"gallery-image-"+index} className={'card ' + (index === currentIndex ? 'border-secondary' : 'border')}>
                  <div className="card-body">
                    <a href="#videoContainer" onClick={(event) => selectVideo(event, index)}>
                      <img src={utils.assetUrl(item.thumbnail)} alt={"Thumb " + item.title} />
                    </a>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({item}) {
  const videoRef = useRef();
  useEffect(() => {    
    videoRef.current?.load();
  }, [item.url]);
  return (
    <div className="card videoContainer">
      <div className="card-body text-center">
        <div className="card-video-overlay">
          <div className="bottom-text">
            <h5 className="card-title">{ item.title }</h5>
            <div className="card-text">{ item.caption }</div>
          </div>
        </div>
        <video width="342" height="512" controls ref={videoRef} poster={item.poster ? utils.assetUrl(item.poster) : ''}>
          <source src={utils.assetUrl(item.url)} type="video/mp4" />
              Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default RecentWork;
