import React from 'react';
import './places.css'; 
import guwahatiImage from '../../Assets/guwahati.jpg';

const Guwahati = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Guwahati" target="_blank">
                    <img className="img img-responsive" src={guwahatiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Guwahati</h1>
                    <h3>"Guwahati: Gateway to the Northeast"</h3>
                    <hr />
                    <p>
                      Guwahati, the largest city in the Indian state of Assam, serves as the gateway to the northeastern region of India. Situated on the banks of the Brahmaputra River and surrounded by the lush green hills of the Shillong Plateau, Guwahati is known for its natural beauty, cultural heritage, and spiritual significance. The city is home to the Kamakhya Temple, one of the most revered shrines in Hinduism, which attracts pilgrims and devotees from far and wide. Guwahati is also known for its vibrant markets, where visitors can shop for traditional Assamese handicrafts, silk sarees, and bamboo products. The city's diverse cuisine, influenced by Assamese, Bengali, and tribal flavors, offers a delightful gastronomic experience to visitors. Additionally, Guwahati serves as a base for exploring the natural wonders of the Northeast, including the Kaziranga National Park, home to the endangered one-horned rhinoceros, and the scenic hill stations of Meghalaya and Arunachal Pradesh. With its blend of history, culture, and natural beauty, Guwahati promises an enriching and memorable experience for travelers.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Guwahati" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Guwahati" target="_blank">
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

export default Guwahati;
