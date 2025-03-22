import React from 'react';
import './places.css'; 
import chandigarhImage from '../../Assets/chandigarh.jpg';

const Chandigarh = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Chandigarh" target="_blank">
                    <img className="img img-responsive" src={chandigarhImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Chandigarh</h1>
                    <h3>"Chandigarh: The City Beautiful"</h3>
                    <hr />
                    <p>
                      Chandigarh, the capital city of the Indian states of Punjab and Haryana, is renowned for its urban planning, modern architecture, and lush greenery. Designed by the famous architect Le Corbusier, Chandigarh is often referred to as the "City Beautiful" for its well-planned layout, wide tree-lined boulevards, and extensive green spaces. The city's prominent landmarks include the Capitol Complex, the Rock Garden, and the Sukhna Lake, which attract tourists with their unique blend of art, nature, and tranquility. Chandigarh is also known for its vibrant cultural scene, with numerous art galleries, theaters, and music festivals enriching the city's cultural fabric. Additionally, the city offers a variety of shopping and dining options, from bustling markets to upscale malls and trendy cafes. With its modern infrastructure and serene ambiance, Chandigarh offers a refreshing escape for visitors seeking a harmonious blend of nature and urban life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Chandigarh" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Chandigarh" target="_blank">
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

export default Chandigarh;
