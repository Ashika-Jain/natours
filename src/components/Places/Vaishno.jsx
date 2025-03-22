import React from 'react';
import './places.css'; 
import vaishnoDeviImage from '../../Assets/vaishno_Devi.jpg';

const Vaishno = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Vaishno_Devi" target="_blank">
                    <img className="img img-responsive" src={vaishnoDeviImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Vaishno Devi</h1>
                    <h3>"Vaishno Devi: The Holy Shrine of Mata Vaishno Devi"</h3>
                    <hr />
                    <p>
                      Vaishno Devi, located in the northern Indian state of Jammu and Kashmir, is one of the holiest pilgrimage sites in Hinduism. Nestled amidst the Trikuta Mountains, the shrine is dedicated to Mata Vaishno Devi, a manifestation of the Hindu Goddess Mahalakshmi. Pilgrims from across the country undertake the arduous trek to seek the blessings of the divine goddess and fulfill their wishes. The pilgrimage begins at Katra, the base camp, from where devotees embark on a journey of approximately 13 kilometers uphill to reach the holy cave shrine. Along the way, pilgrims pass through various landmarks such as Banganga, Charan Paduka, and Adkuwari, each associated with mythological significance. The final destination is the sacred cave, where devotees offer prayers and seek the blessings of Mata Vaishno Devi. The shrine is believed to fulfill the wishes of sincere devotees and bestow divine grace and protection. The pilgrimage to Vaishno Devi is not just a physical journey but also a spiritual experience that instills faith, devotion, and inner peace in the hearts of pilgrims, reaffirming their connection with the divine.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Vaishno_Devi" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Vaishno_Devi" target="_blank">
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

export default Vaishno;
