import React from 'react';
import './places.css'; 
import alibaugImage from '../../Assets/Alibaug.jpg';

const Alibaug = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Alibaug" target="_blank">
                    <img className="img img-responsive" src={alibaugImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Alibaug</h1>
                    <h3>"Alibaug: The Coastal Paradise"</h3>
                    <hr />
                    <p>
                      Alibaug, situated along the Konkan coast in Maharashtra, is a popular weekend getaway known for its pristine beaches, historic forts, and tranquil ambiance. The town offers a perfect blend of natural beauty and cultural heritage, making it an ideal destination for relaxation and exploration. The golden sands of Alibaug's beaches, including Kashid Beach and Alibaug Beach, offer opportunities for sunbathing, swimming, and water sports. Visitors can also explore the historic Kolaba Fort, which stands amidst the sea and provides panoramic views of the Arabian Sea. Alibaug is dotted with charming homestays, beach resorts, and cottages, providing comfortable accommodation options for travelers. Additionally, the town is known for its delicious seafood cuisine, offering a gastronomic delight to visitors. With its serene beaches, picturesque landscapes, and rich history, Alibaug attracts tourists seeking a peaceful retreat away from the hustle and bustle of city life.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Alibaug" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Alibaug" target="_blank">
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

export default Alibaug;
