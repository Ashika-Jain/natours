import React from 'react';
import './places.css'; 
import bhubaneswarImage from '../../Assets/bhubaneswar.jpg';

const Bhubaneswar = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Bhubaneswar" target="_blank">
                    <img className="img img-responsive" src={bhubaneswarImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Bhubaneswar</h1>
                    <h3>"Bhubaneswar: The Temple City of India"</h3>
                    <hr />
                    <p>
                      Bhubaneswar, the capital city of the Indian state of Odisha, is renowned for its ancient temples, rich cultural heritage, and vibrant Kalinga architecture. The city is often referred to as the "Temple City of India" for its numerous temples, including the iconic Lingaraj Temple, which is dedicated to Lord Shiva and is one of the oldest temples in Bhubaneswar. The city's architectural marvels such as the Mukteshwar Temple, Rajarani Temple, and Brahmeswara Temple are testament to its glorious past and spiritual significance. Apart from its religious attractions, Bhubaneswar is also known for its beautiful parks, serene lakes, and bustling markets. The Nandankanan Zoological Park, famous for its white tigers, and the Ekamra Haat, a handicrafts village showcasing Odisha's traditional art and craft, are popular tourist destinations in the city. With its blend of history, spirituality, and natural beauty, Bhubaneswar offers a captivating experience for visitors.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Bhubaneswar" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Bhubaneswar" target="_blank">
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

export default Bhubaneswar;
