import React from 'react';
import './places.css'; 
import mathuraImage from '../../Assets/mathura.jpg';

const Mathura = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Mathura" target="_blank">
                    <img className="img img-responsive" src={mathuraImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Mathura</h1>
                    <h3>"Mathura: The Birthplace of Lord Krishna"</h3>
                    <hr />
                    <p>
                      Mathura, located in the Indian state of Uttar Pradesh, is a sacred city revered by Hindus as the birthplace of Lord Krishna, one of the most revered deities in Hinduism. It is steeped in mythology and is home to numerous temples and religious sites, making it a significant pilgrimage destination for devotees. The city is adorned with ancient temples, including the Krishna Janmabhoomi Temple, where Lord Krishna is believed to have been born, and the Dwarkadhish Temple, dedicated to Lord Krishna's form as the King of Dwarka. Mathura is also famous for its vibrant festivals, particularly during the celebrations of Janmashtami, the birth anniversary of Lord Krishna, when the city comes alive with colorful processions, music, and dance performances. The nearby town of Vrindavan, associated with the childhood of Lord Krishna, is dotted with temples, ashrams, and ghats along the Yamuna River, attracting devotees and spiritual seekers from around the world. Mathura's rich cultural heritage, spiritual significance, and festive atmosphere make it a must-visit destination for those seeking to experience the essence of Hindu mythology and devotion.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Mathura" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Mathura" target="_blank">
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

export default Mathura;
