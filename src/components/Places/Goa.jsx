import React from 'react';
import './places.css'; 
import goaImage from '../../Assets/goa.jpg';

const Goa = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Goa" target="_blank">
                    <img className="img img-responsive" src={goaImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Goa</h1>
                    <h3>"Goa: The Pearl of the Orient"</h3>
                    <hr />
                    <p>
                      Goa, located on the western coast of India, is famous for its pristine beaches, vibrant nightlife, and rich Portuguese heritage. Known as the "Pearl of the Orient," Goa attracts tourists from all over the world with its stunning coastline, palm-fringed beaches, and azure waters. The state is dotted with numerous beach destinations, including popular ones like Baga Beach, Calangute Beach, and Palolem Beach, where visitors can relax, sunbathe, and indulge in water sports. Besides its beaches, Goa is also home to magnificent churches, ancient temples, and colonial-era architecture, reflecting its multicultural history and influences. The state's vibrant nightlife, with its beachside shacks, lively bars, and nightclubs, offers endless entertainment options for party-goers. Additionally, Goa's rich culinary scene, with its fusion of Indian and Portuguese flavors, tantalizes the taste buds of food enthusiasts. Whether it's soaking in the sun on pristine beaches, exploring historical landmarks, or enjoying the vibrant nightlife, Goa offers a perfect blend of relaxation, adventure, and cultural experiences.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Goa" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Goa" target="_blank">
                          Read More At Wikipedia.org
                        </a>
                      </h4>
                    </div>
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

export default Goa;
