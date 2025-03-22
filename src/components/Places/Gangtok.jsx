import React from 'react';
import './places.css'; 
import gangtokImage from '../../Assets/gangtok.jpg';

const Gangtok = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Gangtok" target="_blank">
                    <img className="img img-responsive" src={gangtokImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Gangtok</h1>
                    <h3>"Gangtok: Jewel of the Eastern Himalayas"</h3>
                    <hr />
                    <p>
                      Gangtok, the capital city of the Indian state of Sikkim, is nestled in the Eastern Himalayas and is renowned for its stunning natural beauty, serene monasteries, and vibrant culture. The city offers breathtaking views of snow-capped mountains, lush green valleys, and cascading waterfalls, making it a paradise for nature lovers and adventure enthusiasts. Gangtok is home to several monasteries, including the famous Rumtek Monastery and Enchey Monastery, which are revered centers of Tibetan Buddhism and offer spiritual solace amidst scenic surroundings. Visitors to Gangtok can explore its bustling markets, sample delicious local cuisine, and engage in a variety of adventure activities such as trekking, river rafting, and paragliding. The city's rich cultural heritage is celebrated through its vibrant festivals and traditional music and dance performances. With its tranquil ambiance, stunning vistas, and warm hospitality, Gangtok offers a rejuvenating escape from the hustle and bustle of city life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Gangtok" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Gangtok" target="_blank">
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

export default Gangtok;
