import React from 'react';
import './places.css'; 
import delhiImage from '../../Assets/delhi.jpg';

const Delhi = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Delhi" target="_blank">
                    <img className="img img-responsive" src={delhiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Delhi</h1>
                    <h3>"Delhi: The Heart of India"</h3>
                    <hr />
                    <p>
                      Delhi, the capital city of India, is a vibrant metropolis known for its rich history, diverse culture, and architectural marvels. The city is a melting pot of traditions and modernity, offering a glimpse into India's glorious past and dynamic present. Delhi is home to several UNESCO World Heritage Sites, including the majestic Red Fort, the imposing Qutub Minar, and the historic Humayun's Tomb, which reflect the city's Mughal heritage. The bustling streets of Old Delhi, with their narrow lanes and bustling bazaars, offer a fascinating glimpse into the city's centuries-old markets and culinary delights. New Delhi, on the other hand, is characterized by wide boulevards, grand government buildings, and vibrant shopping malls, showcasing the city's modern face. Visitors to Delhi can explore its vibrant street food scene, visit world-class museums and galleries, and experience its lively festivals and cultural events. With its eclectic mix of history, culture, and modernity, Delhi continues to enchant visitors from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Delhi" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Delhi" target="_blank">
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

export default Delhi;
