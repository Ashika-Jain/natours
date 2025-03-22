import React from 'react';
import './places.css'; 
import nainitalImage from '../../Assets/nainital.jpg';

const YourComponent = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Nainital" target="_blank">
                    <img className="img img-responsive" src={nainitalImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Nainital</h1>
                    <h3>"Nainital: The Lake District of India"</h3>
                    <hr />
                    <p>
                      Nainital, situated in the Indian state of Uttarakhand, is a charming hill station known for its pristine lakes, scenic beauty, and pleasant climate. It is often referred to as the "Lake District of India" and is a popular destination for honeymooners, families, and nature lovers alike. The town is nestled around the picturesque Naini Lake, surrounded by verdant hills and lush forests, offering breathtaking views of the surrounding landscapes. Visitors to Nainital can enjoy leisurely boat rides on the Naini Lake, explore the bustling markets of Mall Road, and visit popular tourist attractions such as Naina Devi Temple, Tiffin Top, and Snow View Point. The town is also known for its vibrant cultural scene, with festivals such as the Nanda Devi Mela and Uttarakhand Mahotsav showcasing the region's rich heritage and traditions. Adventure enthusiasts can indulge in activities such as trekking, horse riding, and cable car rides to enjoy panoramic views of the Himalayan peaks. With its serene ambiance, natural beauty, and range of recreational activities, Nainital offers a rejuvenating escape amidst the tranquil surroundings of the Kumaon Hills.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Nainital" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Nainital" target="_blank">
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

export default YourComponent;
