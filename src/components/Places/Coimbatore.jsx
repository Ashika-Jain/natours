import React from 'react';
import './places.css'; 
import coimbatoreImage from '../../Assets/Coimbatore.jpg';

const Coimbatore = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Coimbatore" target="_blank">
                    <img className="img img-responsive" src={coimbatoreImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Coimbatore</h1>
                    <h3>"Coimbatore: The Manchester of South India"</h3>
                    <hr />
                    <p>
                      Coimbatore, also known as Kovai, is a bustling city located in the southern state of Tamil Nadu. It is often referred to as the "Manchester of South India" due to its thriving textile industry and manufacturing sector. Apart from its industrial prowess, Coimbatore is nestled amidst the picturesque Western Ghats and is surrounded by lush greenery, making it a scenic destination. The city is home to numerous temples, including the ancient Marudamalai Temple and the serene Dhyanalinga Temple, which attract pilgrims and spiritual seekers alike. Coimbatore is also known for its pleasant climate, vibrant culture, and delicious cuisine. Visitors can explore the vibrant streets of the city, indulge in shopping at bustling markets, and savor authentic South Indian delicacies. Additionally, Coimbatore serves as a gateway to several popular hill stations and tourist destinations in Tamil Nadu, making it a convenient starting point for travelers exploring the region.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Coimbatore" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Coimbatore" target="_blank">
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

export default Coimbatore;
