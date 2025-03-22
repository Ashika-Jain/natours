import React from 'react';
import './places.css'; 
import shillongImage from '../../Assets/shillong.jpg';

const Shillong = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Shillong" target="_blank">
                    <img className="img img-responsive" src={shillongImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Shillong</h1>
                    <h3>"Shillong: Scotland of the East"</h3>
                    <hr />
                    <p>
                      Shillong, the capital of the Indian state of Meghalaya, is a picturesque hill station known for its breathtaking natural beauty, pleasant climate, and vibrant culture. Often referred to as the "Scotland of the East," Shillong is nestled amidst rolling hills, cascading waterfalls, and lush greenery, offering mesmerizing vistas at every turn. The town's colonial-era architecture, charming cafes, and bustling markets add to its old-world charm and allure. Visitors to Shillong can explore attractions such as the Ward's Lake, Elephant Falls, and Shillong Peak, which offer panoramic views of the surrounding landscapes. The town is also a hub of music and culture, with a thriving music scene and annual festivals such as the Shillong Autumn Festival and Cherry Blossom Festival showcasing the region's rich cultural heritage. Adventure enthusiasts can indulge in activities such as trekking, rock climbing, and caving in the scenic landscapes surrounding the town. With its serene ambiance, natural beauty, and vibrant culture, Shillong promises an unforgettable experience for travelers seeking tranquility and adventure amidst the pristine hills of the Northeast.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Shillong" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Shillong" target="_blank">
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

export default Shillong;
