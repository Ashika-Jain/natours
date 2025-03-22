import React from 'react';
import './places.css'; 
import manaliImage from '../../Assets/manali.jpg';

const Manali = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Manali" target="_blank">
                    <img className="img img-responsive" src={manaliImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Manali</h1>
                    <h3>"Manali: Gateway to the Himalayas"</h3>
                    <hr />
                    <p>
                      Manali, situated in the northern Indian state of Himachal Pradesh, is a picturesque hill station nestled in the foothills of the Himalayas. It is renowned for its stunning natural beauty, snow-capped mountains, and tranquil ambiance, making it a popular destination for nature lovers and adventure enthusiasts. Surrounded by lush forests, gushing rivers, and cascading waterfalls, Manali offers a serene retreat away from the hustle and bustle of city life. The town serves as a gateway to popular tourist destinations such as the Rohtang Pass, Solang Valley, and the quaint town of Old Manali. Visitors to Manali can indulge in a variety of adventure activities, including trekking, river rafting, paragliding, and skiing during the winter months. The region is also dotted with ancient temples, including the Hadimba Temple and Manu Temple, which are revered by locals and tourists alike. Manali's vibrant culture is celebrated through its colorful festivals, traditional music, and dance performances, which offer insights into the rich cultural heritage of the region. With its breathtaking landscapes, adventurous spirit, and warm hospitality, Manali continues to enchant travelers from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Manali" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Manali" target="_blank">
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

export default Manali;
