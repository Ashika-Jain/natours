import React from 'react';
import './places.css'; 
import nepalImage from '../../Assets/nepal.jpg';

const Nepal = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Nepal" target="_blank">
                    <img className="img img-responsive" src={nepalImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Nepal</h1>
                    <h3>"Nepal: The Land of Himalayas"</h3>
                    <hr />
                    <p>
                      Nepal, nestled in the lap of the Himalayas, is a land of unparalleled natural beauty, rich cultural heritage, and diverse landscapes. It is home to eight of the world's ten highest peaks, including Mount Everest, the highest point on Earth, making it a haven for adventure seekers and mountaineers. Apart from its majestic mountains, Nepal is renowned for its ancient temples, monasteries, and UNESCO World Heritage Sites, such as the Kathmandu Valley, Lumbini (the birthplace of Lord Buddha), and Chitwan National Park, home to a wide variety of wildlife species. The capital city, Kathmandu, is a vibrant hub of culture and commerce, where visitors can explore bustling markets, ornate temples, and traditional Newari architecture. Nepal's diverse geography offers opportunities for trekking, hiking, white-water rafting, and wildlife safaris, allowing travelers to immerse themselves in the country's natural wonders. The warmth and hospitality of the Nepalese people, coupled with the breathtaking beauty of the Himalayas, make Nepal an unforgettable destination for those seeking adventure, spiritual enlightenment, or simply a closer connection with nature.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Nepal" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Nepal" target="_blank">
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

export default Nepal;
