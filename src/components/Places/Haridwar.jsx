import React from 'react';
import './places.css'; 
import haridwarImage from '../../Assets/Haridwar.jpg';

const Haridwar = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Haridwar" target="_blank">
                    <img className="img img-responsive" src={haridwarImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Haridwar</h1>
                    <h3>"Haridwar: Gateway to the Gods"</h3>
                    <hr />
                    <p>
                      Haridwar, situated in the Indian state of Uttarakhand, is one of the holiest cities in Hinduism and is revered as the gateway to the gods. Located on the banks of the sacred Ganges River, Haridwar is a place of immense spiritual significance and is believed to be blessed by the presence of the divine. The city is home to several ancient temples and ghats, where pilgrims gather to perform rituals, take holy dips in the river, and seek blessings. The Har Ki Pauri ghat, adorned with countless diyas during the evening Ganga Aarti, is a sight to behold and offers a mesmerizing spiritual experience to visitors. Haridwar is also known for the Kumbh Mela, one of the largest religious gatherings in the world, which attracts millions of devotees and tourists from across the globe. Apart from its religious importance, Haridwar is surrounded by natural beauty, with lush greenery, rolling hills, and the majestic presence of the Himalayas adding to its charm. With its tranquil ambiance, sacred atmosphere, and rich cultural heritage, Haridwar continues to attract spiritual seekers and devotees seeking solace and enlightenment.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Haridwar" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Haridwar" target="_blank">
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

export default Haridwar;
