import React from 'react';
import './places.css'; 
import amritsarImage from '../../Assets/amritsar.jpg';

const Amirtsar = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Amritsar" target="_blank">
                    <img className="img img-responsive" src={amritsarImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Amritsar</h1>
                    <h3>"Amritsar: The Spiritual and Cultural Hub"</h3>
                    <hr />
                    <p>
                      Amritsar, located in the northwestern state of Punjab, is a city renowned for its spiritual and cultural significance. The city is most famous for being home to the iconic Golden Temple, the holiest shrine of Sikhism, which attracts millions of pilgrims from around the world. The Golden Temple, with its shimmering golden façade and serene sarovar (holy pool), is a symbol of peace and equality. Apart from its spiritual allure, Amritsar is also known for its vibrant culture, rich history, and mouthwatering cuisine. The city's bustling streets are lined with colorful bazaars offering a variety of handicrafts, textiles, and delectable Punjabi delicacies. Visitors can also explore historical sites such as the Jallianwala Bagh, a memorial to the tragic massacre of 1919, and the historic Ram Bagh Garden. With its blend of spirituality, culture, and hospitality, Amritsar offers a truly enriching experience for travelers.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Amritsar" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Amritsar" target="_blank">
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

export default Amirtsar;
