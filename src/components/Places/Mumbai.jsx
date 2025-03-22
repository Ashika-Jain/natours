import React from 'react';
import './places.css'; 
import mumbaiImage from '../../Assets/mumbai.jpg';

const Mumbai = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank">
                    <img className="img img-responsive" src={mumbaiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Mumbai</h1>
                    <h3>"Mumbai: The City of Dreams"</h3>
                    <hr />
                    <p>
                      Mumbai, formerly known as Bombay, is the financial, commercial, and entertainment capital of India. It is a bustling metropolis that never sleeps, pulsating with energy, diversity, and opportunity. Mumbai is home to India's Hindi film industry, Bollywood, and is renowned for its vibrant nightlife, street food, and iconic landmarks. The city is a melting pot of cultures, where traditional festivals coexist with modern aspirations. Visitors to Mumbai can explore historic sites such as the Gateway of India, built during the British Raj, and the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, formerly known as the Prince of Wales Museum, which houses an extensive collection of art and artifacts. Marine Drive, also known as the Queen's Necklace, offers panoramic views of the Arabian Sea and is a popular spot for evening strolls and leisure activities. Mumbai is also known for its bustling markets, including Crawford Market and Colaba Causeway, where visitors can shop for everything from textiles and jewelry to antiques and street food. With its fast-paced lifestyle, cultural richness, and entrepreneurial spirit, Mumbai captivates visitors and residents alike, earning its reputation as the "City of Dreams."
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Mumbai" target="_blank">
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

export default Mumbai;
