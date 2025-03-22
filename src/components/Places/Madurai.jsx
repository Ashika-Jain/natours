import React from 'react';
import './places.css'; 
import maduraiImage from '../../Assets/Madurai.jpg';

const Madurai = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Madurai" target="_blank">
                    <img className="img img-responsive" src={maduraiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Madurai</h1>
                    <h3>"Madurai: The Athens of the East"</h3>
                    <hr />
                    <p>
                      Madurai, located in the southern Indian state of Tamil Nadu, is one of the oldest continuously inhabited cities in the world and is renowned for its rich cultural heritage, ancient temples, and vibrant festivals. Known as the "Athens of the East," Madurai has been a center of learning and pilgrimage for centuries and is home to the iconic Meenakshi Amman Temple, dedicated to the goddess Meenakshi and known for its towering gopurams (gateway towers) adorned with colorful sculptures. The city's bustling streets are lined with traditional markets, where visitors can explore a variety of handicrafts, textiles, and local delicacies. Madurai is also famous for its cultural events, including the annual Meenakshi Thirukalyanam festival, which celebrates the divine marriage of Lord Shiva and Goddess Meenakshi with elaborate processions, music, and dance performances. Visitors to Madurai can also explore other historical landmarks such as the Thirumalai Nayakkar Palace and the Gandhi Memorial Museum, which showcase the city's rich history and architectural heritage. With its vibrant culture, architectural marvels, and spiritual ambiance, Madurai offers a unique glimpse into the rich tapestry of South Indian culture and tradition.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Madurai" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Madurai" target="_blank">
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

export default Madurai;
