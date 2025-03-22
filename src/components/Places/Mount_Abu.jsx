import React from 'react';
import './places.css'; 
import mountAbuImage from '../../Assets/Mount_Abu.jpg';

const Mount_Abu = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Mount_Abu" target="_blank">
                    <img className="img img-responsive" src={mountAbuImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Mount Abu</h1>
                    <h3>"Mount Abu: The Oasis in the Desert"</h3>
                    <hr />
                    <p>
                      Mount Abu, nestled in the Aravalli Range in the Indian state of Rajasthan, is the only hill station in the state and a popular retreat from the scorching desert heat. It is known for its cool climate, scenic beauty, and spiritual significance, making it a favored destination for both tourists and pilgrims. The town is adorned with lush green forests, serene lakes, and breathtaking viewpoints, offering panoramic vistas of the surrounding landscape. Mount Abu is home to several ancient temples, including the Dilwara Temples, renowned for their exquisite marble carvings and intricate architecture dating back to the 11th and 13th centuries. The Nakki Lake, a picturesque artificial lake surrounded by hills, is a popular spot for boating and leisurely walks along the promenade. Visitors to Mount Abu can explore the tranquil gardens of the Brahma Kumaris Spiritual University and Museum and witness stunning sunsets from viewpoints such as the Sunset Point and Honeymoon Point. The town also hosts the annual Mount Abu Summer Festival, featuring cultural performances, folk dances, and a showcase of Rajasthani cuisine, adding to its vibrant charm. With its serene ambiance, natural beauty, and cultural richness, Mount Abu offers a refreshing escape for travelers seeking respite amidst nature.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Mount_Abu" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Mount_Abu" target="_blank">
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

export default Mount_Abu;
