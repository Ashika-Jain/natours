import React from 'react';
import './places.css'; 
import darjeelingImage from '../../Assets/darjeeling.jpg';

const Darjeeling = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Darjeeling" target="_blank">
                    <img className="img img-responsive" src={darjeelingImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Darjeeling</h1>
                    <h3>"Darjeeling: The Queen of the Hills"</h3>
                    <hr />
                    <p>
                      Darjeeling, often referred to as the "Queen of the Hills," is a charming hill station located in the Indian state of West Bengal. Situated in the foothills of the Himalayas, Darjeeling is renowned for its breathtaking landscapes, lush tea gardens, and panoramic views of the snow-capped mountains. The city is famous for its tea industry, producing some of the finest varieties of tea in the world. Visitors to Darjeeling can enjoy scenic train rides on the UNESCO World Heritage-listed Darjeeling Himalayan Railway, also known as the "Toy Train," which offers stunning views of the surrounding hills and valleys. The city's colonial architecture, including the iconic Darjeeling Himalayan Railway Station and the historic Raj Bhavan, reflects its rich history and cultural heritage. Darjeeling is also a popular destination for adventure enthusiasts, offering opportunities for trekking, mountaineering, and river rafting. With its cool climate, serene ambiance, and timeless charm, Darjeeling continues to captivate travelers from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Darjeeling" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Darjeeling" target="_blank">
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

export default Darjeeling;
