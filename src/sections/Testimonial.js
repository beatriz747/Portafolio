import * as utils from '../utils';

function Testimonial() {
    return (
        <div className="container-fluid fh5co-about-me" id="testimonial">
    <div id="my-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="card"> <img className="card-img d-block w-100" src={utils.assetUrl('img/about-me-img.png')} alt="" />
          <div className="card-img-overlay">
            <h2>People says about me</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-md-block"> <img src={utils.assetUrl('img/quote-icon.png')} alt="" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="carousel-caption d-md-block"> <img src={utils.assetUrl('img/quote-icon.png')} alt="" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-md-block"> <img src={utils.assetUrl('img/quote-icon.png')} alt="" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#my-carousel" data-slide-to="0" > <img src={utils.assetUrl('img/about-me-img1.png')} alt="" /> <span>Sherrie Rose</span> </li>
        <li className="active" data-target="#my-carousel" data-slide-to="1" aria-current="location"> <img src={utils.assetUrl('img/about-me-img2.png')} alt="" /> <span>Sherrie Rose</span> </li>
        <li data-target="#my-carousel" data-slide-to="2"> <img src={utils.assetUrl('img/about-me-img3.png')} alt="" /> <span>Sherrie Rose</span> </li>
      </ol>
    </div>
  </div>
    );
}

export default Testimonial;