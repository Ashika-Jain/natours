import React from 'react';
import './places.css'; 
import lucknowImage from '../../Assets/lucknow.jpg';

const Lucknow = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Lucknow" target="_blank">
                    <img className="img img-responsive" src={lucknowImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Lucknow</h1>
                    <h3>"Lucknow: The City of Nawabs"</h3>
                    <hr />
                    <p>
                      Lucknow, the capital city of the Indian state of Uttar Pradesh, is renowned for its rich cultural heritage, majestic monuments, and delectable cuisine. Known as the "City of Nawabs," Lucknow was once the seat of power of the Nawabs of Awadh and is famous for its grandiose architecture, elegant gardens, and polite manners. The city is home to iconic landmarks such as the Bara Imambara, a monumental complex featuring the imposing Asafi Masjid and the labyrinthine Bhul Bhulaiya, and the Chota Imambara, adorned with intricate decorations and chandeliers. Lucknow is also known for its mouthwatering Awadhi cuisine, which includes specialties like kebabs, biryanis, and sweets such as the famous 'shahi tukda' and 'kulfi'. Visitors to Lucknow can explore the bustling markets of Hazratganj and Chowk, known for their traditional Chikan embroidery and handicrafts, and witness the city's vibrant culture through its classical music, dance performances, and annual festivals like the Lucknow Mahotsav. With its regal charm, culinary delights, and warm hospitality, Lucknow offers a unique blend of history, culture, and tradition that continues to enchant visitors from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Lucknow" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Lucknow" target="_blank">
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

export default Lucknow;
