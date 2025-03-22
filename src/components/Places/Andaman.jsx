import React from 'react';
import './places.css'; 
import andamanImage from '../../Assets/Andaman_and_Nicobar_Islands.jpg';

const Andaman = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands" target="_blank">
                    <img className="img img-responsive" src={andamanImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Andaman and Nicobar Islands</h1>
                    <h3>"Andaman and Nicobar Islands: A Tropical Paradise"</h3>
                    <hr />
                    <p>
                      The Andaman and Nicobar Islands, located in the Bay of Bengal, are a group of picturesque islands known for their stunning natural beauty and rich biodiversity. The islands boast pristine beaches with crystal-clear waters, vibrant coral reefs, and lush tropical forests, making them a haven for nature lovers and adventure enthusiasts alike. Visitors can indulge in a variety of water sports such as snorkeling, scuba diving, and kayaking to explore the vibrant marine life and underwater wonders. The islands are also home to indigenous tribes with unique cultures and traditions, offering an opportunity to experience their way of life and learn about their rich heritage. From exploring historic landmarks such as the Cellular Jail in Port Blair to relaxing on secluded beaches like Radhanagar Beach in Havelock Island, the Andaman and Nicobar Islands offer a truly unforgettable experience for travelers seeking an escape to paradise.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands" target="_blank">
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

export default Andaman;
