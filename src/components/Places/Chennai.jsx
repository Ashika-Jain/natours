import React from 'react';
import './places.css'; 
import chennaiImage from '../../Assets/chennai.jpg';

const Chennai = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">
                    <img className="img img-responsive" src={chennaiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Chennai</h1>
                    <h3>"Chennai: The Gateway to South India"</h3>
                    <hr />
                    <p>
                      Chennai, formerly known as Madras, is the capital city of the Indian state of Tamil Nadu and is often referred to as the "Gateway to South India." The city is renowned for its rich cultural heritage, vibrant traditions, and bustling urban life. Chennai is home to numerous historical landmarks, including the majestic Marina Beach, one of the longest urban beaches in the world, and the iconic Kapaleeshwarar Temple, known for its Dravidian architecture. The city's diverse culinary scene, with its mouthwatering South Indian cuisine, aromatic filter coffee, and delectable street food, offers a gastronomic delight to visitors. Chennai is also a hub for arts and culture, with various music and dance festivals celebrated throughout the year, showcasing the region's classical arts and traditions. Additionally, Chennai is a major center for education, healthcare, and IT industries, contributing to its cosmopolitan vibe and dynamic growth. With its blend of history, culture, and modernity, Chennai offers a unique and captivating experience for travelers.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Chennai" target="_blank">
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

export default Chennai;
