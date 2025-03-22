import React from 'react';
import './places.css'; 
import jammuImage from '../../Assets/jammu.jpg';

const Jammu = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Jammu" target="_blank">
                    <img className="img img-responsive" src={jammuImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Jammu</h1>
                    <h3>"Jammu: The City of Temples"</h3>
                    <hr />
                    <p>
                      Nestled in the foothills of the Himalayas, Jammu is known for its rich cultural heritage and religious significance. The city is adorned with magnificent temples, including the revered Vaishno Devi shrine, drawing millions of pilgrims each year. Apart from its spiritual charm, Jammu offers scenic beauty with lush green landscapes and majestic mountains. The Raghunath Temple, Mubarak Mandi Palace, and Amar Mahal Palace are among the architectural marvels that showcase the city's royal legacy. Jammu is also a gateway to the picturesque Kashmir Valley and serves as a starting point for many travelers exploring the region's natural beauty.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Jammu" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Jammu" target="_blank">
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

export default Jammu;
