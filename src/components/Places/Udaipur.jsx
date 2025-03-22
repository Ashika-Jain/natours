import React from 'react';
import './places.css'; 
import udaipurImage from '../../Assets/udaipur.jpg';

const Udaipur = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Udaipur" target="_blank">
                    <img className="img img-responsive" src={udaipurImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Udaipur</h1>
                    <h3>"Udaipur: The City of Lakes"</h3>
                    <hr />
                    <p>
                      Udaipur, also known as the "City of Lakes," is a stunningly beautiful city located in the western state of Rajasthan, India. Renowned for its majestic palaces, serene lakes, and rich cultural heritage, Udaipur is one of the most romantic destinations in India. The city's crown jewel is the majestic City Palace, a sprawling complex of palaces, courtyards, and gardens overlooking Lake Pichola, offering panoramic views of the surrounding Aravalli Hills. Visitors can also explore other architectural marvels such as the Jag Mandir, Jagdish Temple, and Saheliyon ki Bari, which showcase the grandeur of Rajput and Mughal architecture. Udaipur's picturesque lakes, including Lake Pichola, Fateh Sagar Lake, and Udai Sagar Lake, offer opportunities for boat rides, leisurely walks, and stunning sunset views. The city is also famous for its vibrant bazaars, where visitors can shop for traditional handicrafts, textiles, and jewelry. With its regal charm, romantic ambiance, and scenic beauty, Udaipur captivates the hearts of travelers, offering an unforgettable experience amidst the opulence of Rajasthan's royal heritage.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Udaipur" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Udaipur" target="_blank">
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

export default Udaipur;
