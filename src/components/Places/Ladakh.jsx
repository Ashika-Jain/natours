import React from 'react';
import './places.css'; 
import ladakhImage from '../../Assets/ladakh.jpg';

const Ladakh = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Ladakh" target="_blank">
                    <img className="img img-responsive" src={ladakhImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Ladakh</h1>
                    <h3>"Ladakh: The Land of High Passes"</h3>
                    <hr />
                    <p>
                      Ladakh, situated in the northernmost part of India, is a region renowned for its breathtaking landscapes, majestic mountains, and rich cultural heritage. Often referred to as the "Land of High Passes," Ladakh is characterized by its rugged terrain, barren mountains, and pristine lakes. The region is home to several Buddhist monasteries, including the iconic Thiksey Monastery, Hemis Monastery, and Diskit Monastery, which are architectural marvels and spiritual centers for Buddhists. Ladakh is also famous for its picturesque lakes, such as Pangong Lake and Tso Moriri Lake, which change colors with the shifting sunlight and offer stunning reflections of the surrounding mountains. Visitors to Ladakh can indulge in a variety of adventure activities, including trekking, mountain biking, river rafting, and wildlife spotting in the Hemis National Park. The region's vibrant culture is reflected in its colorful festivals, traditional music, and dance performances, which offer insights into the unique way of life of the Ladakhi people. With its surreal beauty, spiritual ambiance, and adventurous spirit, Ladakh captivates the hearts of travelers and leaves them with unforgettable memories.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Ladakh" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Ladakh" target="_blank">
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

export default Ladakh;
