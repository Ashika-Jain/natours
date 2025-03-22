import React from 'react';
import './places.css'; 
import kanyakumariImage from '../../Assets/kanyakumari.jpg';

const Kanyakumari = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Kanyakumari" target="_blank">
                    <img className="img img-responsive" src={kanyakumariImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Kanyakumari</h1>
                    <h3>"Kanyakumari: Where the Seas Meet"</h3>
                    <hr />
                    <p>
                      Kanyakumari, located at the southernmost tip of the Indian subcontinent, is a coastal town renowned for its stunning natural beauty and cultural significance. It is the point of confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean, making it a unique destination where one can witness mesmerizing sunrise and sunset views over the sea. Kanyakumari is home to the Vivekananda Rock Memorial, dedicated to the famous Indian philosopher Swami Vivekananda, who meditated on the rock and attained enlightenment. The town is also famous for the towering Thiruvalluvar Statue, which stands as a symbol of wisdom and knowledge. Visitors to Kanyakumari can explore the tranquil beaches, visit ancient temples such as the Kanyakumari Amman Temple, and take a ferry ride to the Vivekananda Rock Memorial and Thiruvalluvar Statue. The town's rich cultural heritage is reflected in its colorful festivals, traditional dance performances, and mouthwatering seafood cuisine. With its serene beaches, breathtaking views, and spiritual ambiance, Kanyakumari offers a peaceful retreat for travelers seeking solace and tranquility.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Kanyakumari" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Kanyakumari" target="_blank">
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

export default Kanyakumari;
