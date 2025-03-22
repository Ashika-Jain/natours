import React from 'react';
import './places.css'; 
import bengaluruImage from '../../Assets/bengaluru.jpg';

const Bengaluru = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Bengaluru" target="_blank">
                    <img className="img img-responsive" src={bengaluruImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Bengaluru</h1>
                    <h3>"Bengaluru: The Silicon Valley of India"</h3>
                    <hr />
                    <p>
                      Bengaluru, the capital city of Karnataka, is known as the "Silicon Valley of India" for its thriving IT industry and vibrant startup culture. The city is a melting pot of cultures, cuisines, and traditions, offering a unique blend of modernity and tradition. Bengaluru is home to numerous tech parks, multinational corporations, and research institutions, making it a hub for innovation and technology. Beyond its tech-savvy reputation, Bengaluru is also known for its pleasant climate, lush green spaces, and vibrant nightlife. The city's iconic landmarks include the majestic Vidhana Soudha, Lalbagh Botanical Garden, and Bangalore Palace, which showcase its rich architectural heritage. Bengaluru's diverse culinary scene, with its array of street food, cafes, and fine dining restaurants, ensures a delightful gastronomic experience for visitors. With its dynamic energy and cosmopolitan vibe, Bengaluru continues to charm travelers from around the world.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Bengaluru" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Bengaluru" target="_blank">
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

export default Bengaluru;
