import React from 'react';
import './places.css'; 
import ootyImage from '../../Assets/ooty.jpg';

const Ooty = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Ooty" target="_blank">
                    <img className="img img-responsive" src={ootyImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Ooty</h1>
                    <h3>"Ooty: The Queen of Hill Stations"</h3>
                    <hr />
                    <p>
                      Ooty, officially known as Udhagamandalam, is a charming hill station nestled in the Nilgiri Hills of Tamil Nadu, India. It is renowned for its serene landscapes, cool climate, and lush tea gardens, making it a popular retreat for nature lovers and honeymooners. Ooty is adorned with picturesque gardens, pristine lakes, and rolling hills covered with dense forests of pine and eucalyptus trees. The town is famous for its heritage toy train, the Nilgiri Mountain Railway, which offers breathtaking views of the surrounding valleys and is a UNESCO World Heritage Site. Visitors to Ooty can explore attractions such as the Ooty Botanical Gardens, Doddabetta Peak, and Ooty Lake, where they can enjoy boating and picnics amidst tranquil surroundings. The town is also known for its tea plantations, and visitors can take guided tours to learn about the tea-making process and sample freshly brewed tea. With its pleasant climate, scenic beauty, and range of outdoor activities, Ooty provides a rejuvenating escape from the hustle and bustle of city life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Ooty" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Ooty" target="_blank">
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

export default Ooty;
