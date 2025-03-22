import React from 'react';
import './places.css'; 
import mussoorieImage from '../../Assets/mussoorie.jpg';

const Mussoorie = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Mussoorie" target="_blank">
                    <img className="img img-responsive" src={mussoorieImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Mussoorie</h1>
                    <h3>"Mussoorie: The Queen of Hills"</h3>
                    <hr />
                    <p>
                      Mussoorie, located in the Indian state of Uttarakhand, is a picturesque hill station nestled in the foothills of the Garhwal Himalayas. It is known for its scenic beauty, lush greenery, and pleasant climate, making it a popular destination for nature lovers and honeymooners. Mussoorie offers panoramic views of the snow-capped peaks of the Himalayas, rolling hills, and cascading waterfalls, providing a serene escape from the hustle and bustle of city life. The town is dotted with colonial-era buildings, charming cafes, and bustling markets, where visitors can explore local handicrafts, Tibetan artifacts, and woolen garments. The Mall Road, lined with shops and eateries, is a popular promenade for leisurely walks and enjoying stunning vistas of the surrounding mountains. Mussoorie is also home to several tourist attractions, including the Gun Hill viewpoint, Kempty Falls, and Lal Tibba, the highest point in Mussoorie offering panoramic views of the Himalayan range. Adventure enthusiasts can indulge in activities such as trekking, paragliding, and camping in the scenic landscapes surrounding the town. With its tranquil ambiance, breathtaking views, and recreational activities, Mussoorie exudes a timeless charm that continues to captivate visitors throughout the year.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Mussoorie" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Mussoorie" target="_blank">
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

export default Mussoorie;
