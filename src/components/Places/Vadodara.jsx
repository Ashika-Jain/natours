import React from 'react';
import './places.css'; 
import vadodaraImage from '../../Assets/vadodara.jpg';

const Vadodara = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Vadodara" target="_blank">
                    <img className="img img-responsive" src={vadodaraImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Vadodara</h1>
                    <h3>"Vadodara: The Cultural Capital of Gujarat"</h3>
                    <hr />
                    <p>
                      Vadodara, also known as Baroda, is a vibrant city located in the western state of Gujarat, India. Renowned for its rich cultural heritage, magnificent palaces, and vibrant arts scene, Vadodara is often referred to as the "Cultural Capital of Gujarat." The city's crown jewel is the majestic Lakshmi Vilas Palace, the former residence of the Gaekwad dynasty and one of the largest private residences in the world. Visitors can explore the palace's opulent interiors, sprawling gardens, and impressive collection of art and artifacts. Vadodara is also home to several other architectural marvels, including the historic Kirti Mandir, Maharaja Fateh Singh Museum, and Sayaji Baug, a sprawling garden complex with a zoo and planetarium. The city's vibrant arts scene is showcased at venues such as the Faculty of Fine Arts, which offers courses in various art forms, and the annual VadFest, a cultural festival celebrating music, dance, theater, and literature. Vadodara's culinary scene is equally diverse, with street food stalls, traditional Gujarati thali restaurants, and international cuisines offering a gastronomic delight to visitors. With its rich history, cultural vibrancy, and warm hospitality, Vadodara invites travelers to immerse themselves in its unique blend of tradition and modernity.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Vadodara" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Vadodara" target="_blank">
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

export default Vadodara;
