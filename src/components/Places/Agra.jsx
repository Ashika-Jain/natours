import React from 'react';
import './places.css'; 
import agraImage from '../../Assets/agra.jpg';

const Agra = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Agra" target="_blank">
                    <img className="img img-responsive" src={agraImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Agra</h1>
                    <h3>"Agra: The City of Love and Heritage"</h3>
                    <hr />
                    <p>
                      Agra, located on the banks of the Yamuna River in the Indian state of Uttar Pradesh, is renowned for its rich historical and architectural heritage. The city is most famous for being the home of the iconic Taj Mahal, one of the Seven Wonders of the World, which stands as a symbol of eternal love and architectural brilliance. Agra Fort, another UNESCO World Heritage Site, is a majestic red sandstone fortress that showcases the grandeur of Mughal architecture. The city also boasts other architectural marvels such as the tomb of Itmad-ud-Daulah and Fatehpur Sikri, the abandoned Mughal city. Agra's bustling streets are filled with vibrant markets offering a variety of handicrafts and delicacies, providing visitors with an immersive cultural experience. With its unparalleled beauty and historical significance, Agra continues to mesmerize tourists from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Agra" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Agra" target="_blank">
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

export default Agra;
