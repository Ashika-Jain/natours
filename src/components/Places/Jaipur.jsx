import React from 'react';
import './places.css'; 
import jaipurImage from '../../Assets/jaipur.jpg';

const Jaipur = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Jaipur" target="_blank">
                    <img className="img img-responsive" src={jaipurImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Jaipur</h1>
                    <h3>"Jaipur: The Pink City"</h3>
                    <hr />
                    <p>
                      Jaipur, the capital city of the Indian state of Rajasthan, is renowned for its majestic forts, vibrant bazaars, and rich cultural heritage. Known as the "Pink City" due to the distinct color of its buildings, Jaipur is a fascinating blend of history, tradition, and modernity. The city is home to several iconic landmarks, including the magnificent Amber Fort, the majestic City Palace, and the intricately designed Hawa Mahal, which showcase the grandeur and opulence of Rajasthan's royal past. Jaipur's bustling markets, such as Johari Bazaar and Bapu Bazaar, offer a treasure trove of handicrafts, textiles, and traditional Rajasthani jewelry, making it a paradise for shoppers. The city's vibrant culture is reflected in its colorful festivals, lively folk performances, and delectable Rajasthani cuisine, which tantalizes the taste buds of visitors. Jaipur also serves as a gateway to the majestic Thar Desert and other popular tourist destinations in Rajasthan, offering unforgettable experiences such as camel safaris, desert camping, and cultural tours. With its timeless charm, architectural marvels, and warm hospitality, Jaipur continues to enchant travelers from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Jaipur" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Jaipur" target="_blank">
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

export default Jaipur;
