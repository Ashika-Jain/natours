import React from 'react';
import './places.css'; 
import shimlaImage from '../../Assets/shimla.jpg';

const Shimla = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Shimla" target="_blank">
                    <img className="img img-responsive" src={shimlaImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Shimla</h1>
                    <h3>"Shimla: Queen of the Hills"</h3>
                    <hr />
                    <p>
                      Shimla, the capital city of the Indian state of Himachal Pradesh, is a charming hill station nestled in the foothills of the Himalayas. It is renowned for its colonial architecture, picturesque landscapes, and pleasant climate, making it a popular destination for honeymooners, families, and solo travelers alike. Shimla's Mall Road, with its colonial-era buildings, bustling markets, and panoramic views of the surrounding hills, is a major attraction for visitors. The town is also home to several heritage sites, including the Viceregal Lodge, Christ Church, and Jakhu Temple, which offer insights into its colonial past and rich cultural heritage. Shimla's natural beauty is enhanced by its lush greenery, dense forests, and scenic vistas, making it an ideal destination for nature lovers and outdoor enthusiasts. Visitors can explore the nearby attractions such as Kufri, Naldehra, and Chail, which offer opportunities for trekking, skiing, and other adventure activities. Whether strolling along the Mall Road, exploring historical landmarks, or enjoying the tranquility of nature, Shimla offers a delightful escape amidst the serene Himalayan landscapes.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Shimla" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Shimla" target="_blank">
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

export default Shimla;
