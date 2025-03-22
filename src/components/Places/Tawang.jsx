import React from 'react';
import './places.css'; 
import tawangImage from '../../Assets/tawang.jpg';

const Tawang = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Tawang" target="_blank">
                    <img className="img img-responsive" src={tawangImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Tawang</h1>
                    <h3>"Tawang: The Hidden Paradise of Arunachal Pradesh"</h3>
                    <hr />
                    <p>
                      Tawang, located in the northwestern part of Arunachal Pradesh, India, is a serene hill station known for its stunning natural beauty, ancient monasteries, and rich cultural heritage. Situated at an altitude of over 10,000 feet, Tawang is surrounded by majestic snow-capped mountains, pristine lakes, and lush green valleys, making it a paradise for nature lovers and adventure enthusiasts. The town is home to the famous Tawang Monastery, one of the largest monasteries in India and an important center of Tibetan Buddhism. Visitors can explore the monastery's ornate architecture, ancient scriptures, and vibrant festivals, such as Losar and Torgya, which offer insights into the region's rich cultural traditions. Tawang is also known for its scenic beauty, with attractions such as Sela Pass, Madhuri Lake, and Nuranang Falls offering breathtaking views of the Himalayan landscape. Adventure seekers can indulge in activities such as trekking, hiking, and river rafting amidst the pristine surroundings of Tawang. With its tranquil ambiance, spiritual significance, and awe-inspiring landscapes, Tawang beckons travelers to embark on a journey of discovery and exploration in the heart of the Eastern Himalayas.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Tawang" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Tawang" target="_blank">
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

export default Tawang;
