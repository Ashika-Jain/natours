import React from 'react';
import './places.css'; 
import mahabalipuramImage from '../../Assets/Mahabalipuram.jpg';

const Mahabalipuram = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Mahabalipuram" target="_blank">
                    <img className="img img-responsive" src={mahabalipuramImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Mahabalipuram</h1>
                    <h3>"Mahabalipuram: The Land of Temples and Beaches"</h3>
                    <hr />
                    <p>
                      Mahabalipuram, also known as Mamallapuram, is a historic town located on the Coromandel Coast of the Bay of Bengal in the Indian state of Tamil Nadu. It is renowned for its ancient temples, rock-cut sculptures, and pristine beaches, making it a popular tourist destination. The town is home to UNESCO World Heritage Site Group of Monuments at Mahabalipuram, which includes the famous Shore Temple, Arjuna's Penance, and the Five Rathas, showcasing exquisite Dravidian architecture and intricate carvings. Mahabalipuram is also known for its spectacular beachfront, where visitors can relax on golden sands, indulge in water sports, and witness mesmerizing sunsets over the Bay of Bengal. The town is a hub for traditional stone carving and sculpture, and visitors can watch artisans at work and purchase intricately carved souvenirs. Mahabalipuram's vibrant culture is celebrated through its classical dance performances, music festivals, and religious ceremonies held at the ancient temples. With its rich history, architectural marvels, and natural beauty, Mahabalipuram offers a captivating experience for travelers seeking a blend of culture, heritage, and relaxation.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Mahabalipuram" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Mahabalipuram" target="_blank">
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

export default Mahabalipuram;
