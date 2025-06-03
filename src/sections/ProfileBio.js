import * as utils from '../utils';
import './ProfileBio.css';

function ProfileBio({ profile }) {
  return (
    <div className="container-fluid fh5co-profile-bio">
      <div className="background-bio section-bg-gradient"></div>
      <ContactCard profile={profile} />
    </div>
  );
}

function ContactCard({ profile }) {
  return (
    <div className="container contact-pop py-4">
      <div className="row">
        <div className="col-md-6 pr-0">
          <div className="card no-border">
            <img className="card-img w-100" src={utils.assetUrl(profile.avatar)} alt="" />
          </div>
        </div>
        <div className="col-md-6 pl-0" id="about">
          <div className="content">
              <h3>{ profile.name }</h3>
              <h4>{ profile.jobTitle }</h4>
              <hr />
              <p className="pre">{ profile.bio }</p>
              <p>
                <i className="fas fa-envelope mr-2 text-accent"></i>
                <a href={"mailto:"+profile.contact.email}>{ profile.contact.email }</a>
              </p>
              <p>
                <i className="fab fa-whatsapp-square mr-2"></i>
                <a href={profile.contact.telephone.link}>{ profile.contact.telephone.text }</a>
              </p>
              <p>
                <i className="fab fa-instagram mr-2"></i>
                <a href={profile.socialNetworks[0].url} target="_blank" rel="noopener noreferrer">
                  { profile.socialNetworks[0].username }
                </a>
              </p>
              <p>
                <i className="fas fa-map-marker mr-2"></i>
                { profile.contact.location }
              </p>
              <hr/>
              <div className="text-center">
                <a href={utils.assetUrl(profile.resume)} className="btn btn-contact" download>
                  <i className="fas fa-download"></i> Descargar CV
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProfileBio;