import React from 'react';
import './places.css'; 
import lonavalaImage from '../../Assets/lonavala.jpg';

const Lonavala = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Lonavala" target="_blank">
                    <img className="img img-responsive" src={lonavalaImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Lonavala</h1>
                    <h3>"Lonavala: A Serene Hill Station"</h3>
                    <hr />
                    <p>
                      Lonavala, nestled in the Sahyadri range of the Western Ghats in Maharashtra, is a popular hill station known for its scenic beauty, lush greenery, and pleasant climate. The town is renowned for its majestic waterfalls, picturesque valleys, and ancient caves, making it a popular getaway for nature lovers and adventure enthusiasts. Lonavala is famous for its natural attractions such as Tiger's Point, Lion's Point, and Bhushi Dam, which offer panoramic views of the surrounding landscape and opportunities for trekking, hiking, and picnicking. The region is also home to historical landmarks like the Karla Caves and the Bhaja Caves, which date back to the Buddhist era and feature intricate rock-cut sculptures and inscriptions. Lonavala is also known for its delectable cuisine, including the famous chikki, a sweet made from jaggery and nuts, which is a popular souvenir for visitors. With its tranquil ambiance, scenic vistas, and recreational activities, Lonavala provides a refreshing escape from the hustle and bustle of city life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Lonavala" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Lonavala" target="_blank">
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

export default Lonavala;
