import React from 'react';
import './places.css'; 
import himachalImage from '../../Assets/himachal.jpg';

const Himachal = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Himachal_Pradesh" target="_blank">
                    <img className="img img-responsive" src={himachalImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Himachal Pradesh</h1>
                    <h3>"Himachal Pradesh: Land of Enchanting Hills"</h3>
                    <hr />
                    <p>
                      Himachal Pradesh, nestled in the lap of the Himalayas, is a picturesque state known for its enchanting hills, serene landscapes, and vibrant culture. The state is blessed with snow-capped peaks, lush green valleys, and meandering rivers, making it a paradise for nature lovers and adventure enthusiasts alike. Himachal Pradesh is home to several popular hill stations, including Shimla, Manali, and Dharamshala, which attract tourists from all over the world with their scenic beauty and pleasant climate. Visitors to Himachal Pradesh can explore ancient temples, quaint villages, and colonial-era architecture, reflecting the region's rich history and cultural heritage. The state is also renowned for its adventure sports such as trekking, skiing, paragliding, and river rafting, offering thrilling experiences amidst breathtaking surroundings. Himachal Pradesh's warm hospitality, delicious cuisine, and colorful festivals further add to its charm, making it a must-visit destination for travelers seeking tranquility, adventure, and cultural experiences.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Himachal_Pradesh" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Himachal_Pradesh" target="_blank">
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

export default Himachal;
