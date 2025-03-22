import React from 'react';
import './places.css'; 
import pondicherryImage from '../../Assets/pondicherry.jpg';

const Pondicherry = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Pondicherry" target="_blank">
                    <img className="img img-responsive" src={pondicherryImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Pondicherry</h1>
                    <h3>"Pondicherry: Where French Flair Meets Indian Culture"</h3>
                    <hr />
                    <p>
                      Pondicherry, officially known as Puducherry, is a charming coastal town on the southeastern coast of India. It is renowned for its unique blend of French colonial heritage, vibrant Tamil culture, and pristine beaches, making it a popular destination for travelers seeking relaxation and cultural immersion. The town's French Quarter, with its colonial-era architecture, cobblestone streets, and quaint cafes, evokes the ambiance of a bygone era and offers a delightful contrast to the bustling Indian streets. Visitors can explore attractions such as the Promenade Beach, Auroville, and the Aurobindo Ashram, which reflect the town's rich spiritual heritage and cultural diversity. Pondicherry is also known for its delectable cuisine, influenced by both French and South Indian flavors, offering a gastronomic delight to visitors. The town's relaxed vibe, picturesque landscapes, and serene beaches make it an ideal destination for leisurely strolls, yoga retreats, and meditation sessions. With its laid-back charm and cultural richness, Pondicherry invites travelers to immerse themselves in its enchanting atmosphere and discover the perfect balance of tranquility and adventure.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Pondicherry" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Pondicherry" target="_blank">
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

export default Pondicherry;
