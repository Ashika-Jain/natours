import React from 'react';
import './places.css'; 
import jodhpurImage from '../../Assets/Jodhpur.jpg';

const Jodhpur = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Jodhpur" target="_blank">
                    <img className="img img-responsive" src={jodhpurImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Jodhpur</h1>
                    <h3>"Jodhpur: The Blue City"</h3>
                    <hr />
                    <p>
                      Jodhpur, also known as the "Blue City" due to the indigo-colored houses in its old town area, is a historic city located in the Indian state of Rajasthan. It is famous for its magnificent forts, palaces, and vibrant culture. The majestic Mehrangarh Fort, perched atop a rocky hill, offers panoramic views of the city and houses a museum showcasing the rich history and heritage of the region. The Umaid Bhawan Palace, one of the world's largest private residences, is a splendid example of Indo-Saracenic architecture and offers luxurious accommodations to guests. Jodhpur's bustling markets, such as Sadar Bazaar and Clock Tower Market, are a paradise for shoppers, offering a wide range of traditional textiles, handicrafts, and Rajasthani spices. The city is also renowned for its mouthwatering cuisine, with specialties like dal bati churma and mirchi vada tantalizing the taste buds of visitors. Jodhpur's vibrant culture is celebrated through its colorful festivals, folk music, and dance performances, which offer insights into the region's rich cultural heritage. With its architectural marvels, cultural richness, and warm hospitality, Jodhpur continues to captivate travelers from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Jodhpur" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Jodhpur" target="_blank">
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

export default Jodhpur;
