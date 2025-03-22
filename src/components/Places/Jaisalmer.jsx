import React from 'react';
import './places.css'; 
import jaisalmerImage from '../../Assets/jaisalmer.jpg';

const Jaisalmer = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Jaisalmer" target="_blank">
                    <img className="img img-responsive" src={jaisalmerImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Jaisalmer</h1>
                    <h3>"Jaisalmer: The Golden City"</h3>
                    <hr />
                    <p>
                      Jaisalmer, located in the heart of the Thar Desert in the Indian state of Rajasthan, is known as the "Golden City" due to its golden sandstone architecture and the golden hues of the desert landscape. The city is famous for its majestic forts, intricately carved havelis, and vibrant culture. The imposing Jaisalmer Fort, also known as Sonar Qila, stands as a sentinel in the desert, offering panoramic views of the surrounding golden dunes and the city below. Jaisalmer is also renowned for its beautifully crafted havelis, such as Patwon Ki Haveli and Salim Singh Ki Haveli, which showcase exquisite Rajasthani craftsmanship and architecture. Visitors to Jaisalmer can enjoy camel safaris through the vast expanse of the Thar Desert, witness mesmerizing folk performances under the starlit sky, and savor traditional Rajasthani cuisine at the city's bustling markets. The city's rich cultural heritage is celebrated through its colorful festivals, including the Desert Festival, which showcases the vibrant traditions and customs of Rajasthan. With its enchanting beauty, rich history, and warm hospitality, Jaisalmer offers an unforgettable experience to travelers seeking an authentic taste of Rajasthan's desert life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Jaisalmer" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Jaisalmer" target="_blank">
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

export default Jaisalmer;
