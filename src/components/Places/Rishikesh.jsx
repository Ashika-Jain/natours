import React from 'react';
import './places.css'; 
import rishikeshImage from '../../Assets/rishikesh.jpg';

const Rishikesh = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Rishikesh" target="_blank">
                    <img className="img img-responsive" src={rishikeshImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Rishikesh</h1>
                    <h3>"Rishikesh: Gateway to the Himalayas"</h3>
                    <hr />
                    <p>
                      Rishikesh, situated in the foothills of the Himalayas in the Indian state of Uttarakhand, is a spiritual and yoga capital of the world. It is renowned for its tranquil ambiance, scenic beauty, and spiritual significance, attracting seekers and travelers from all corners of the globe. Rishikesh is nestled on the banks of the holy Ganges River, surrounded by lush green hills and towering mountains, making it an ideal destination for meditation, yoga, and spiritual retreats. The town is dotted with numerous ashrams, temples, and yoga centers, where visitors can immerse themselves in ancient wisdom, yoga practices, and spiritual teachings. Rishikesh is also known for its adventurous activities, including white-water rafting, trekking, bungee jumping, and camping, offering a perfect blend of spirituality and adventure. The iconic Lakshman Jhula and Ram Jhula, suspension bridges spanning the Ganges, are popular landmarks offering stunning views of the river and surrounding scenery. Whether seeking spiritual solace, adventure, or simply a tranquil escape amidst nature, Rishikesh offers something for every traveler.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Rishikesh" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Rishikesh" target="_blank">
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

export default Rishikesh;
