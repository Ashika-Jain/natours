import React from 'react';
import './places.css'; 
import puriImage from '../../Assets/puri.jpg';

const Puri = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Puri" target="_blank">
                    <img className="img img-responsive" src={puriImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Puri</h1>
                    <h3>"Puri: Land of Jagannath"</h3>
                    <hr />
                    <p>
                      Puri, located on the eastern coast of India in the state of Odisha, is a sacred city known for its famous Jagannath Temple and pristine beaches. It is one of the Char Dham pilgrimage sites for Hindus and attracts devotees from all over the world. The Jagannath Temple, dedicated to Lord Jagannath (an incarnation of Lord Vishnu), is a major pilgrimage destination and hosts the annual Rath Yatra, a grand chariot festival. Apart from its religious significance, Puri is renowned for its golden sandy beaches, such as Puri Beach and Chandrabhaga Beach, which offer breathtaking views of the sunrise and sunset. Visitors can also explore other attractions in Puri, including the Puri Beach Market, where they can shop for traditional handicrafts, artifacts, and souvenirs. The Konark Sun Temple, a UNESCO World Heritage Site, is located nearby and is famous for its impressive architecture and intricate stone carvings. Puri's rich cultural heritage, spiritual ambiance, and serene beaches make it a must-visit destination for those seeking a blend of religious fervor and natural beauty.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Puri" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Puri" target="_blank">
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

export default Puri;
