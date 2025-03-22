import React from 'react';
import './places.css'; 
import varanasiImage from '../../Assets/varanasi.jpg';

const Varanasi = () => {
  return (
    <div className="shreya outer-box">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="content">
              <div className="image-content">
                <div className="image">
                  <a href="https://en.wikipedia.org/wiki/Varanasi" target="_blank">
                    <img className="img img-responsive" src={varanasiImage} alt="Destination" />
                  </a>
                </div>
                <div className="information">
                  <div className="info-left">
                    <h1>Varanasi</h1>
                    <h3>"Varanasi: The Spiritual Capital of India"</h3>
                    <hr />
                    <p>
                      Varanasi, also known as Kashi or Banaras, is one of the oldest and holiest cities in the world, situated on the banks of the sacred Ganges River in the Indian state of Uttar Pradesh. Renowned for its spiritual significance, ancient temples, and vibrant cultural heritage, Varanasi is considered the spiritual capital of India. The city's ghats, including Dashashwamedh Ghat, Manikarnika Ghat, and Assi Ghat, are bustling with pilgrims and devotees performing rituals, offering prayers, and taking holy dips in the sacred river. Varanasi is home to numerous temples, including the Kashi Vishwanath Temple, Sankat Mochan Hanuman Temple, and Durga Temple, each attracting devotees from far and wide. The city is also a center for learning and philosophy, with renowned institutions such as Banaras Hindu University (BHU) and traditional ashrams offering teachings in various spiritual disciplines. Varanasi's narrow lanes, bustling bazaars, and vibrant street life offer a glimpse into its rich cultural tapestry and timeless charm. The city is also famous for its colorful festivals, including Dev Deepawali, Maha Shivaratri, and Ganga Mahotsav, which celebrate its spiritual heritage and cultural diversity. With its ancient traditions, spiritual ambiance, and timeless allure, Varanasi continues to captivate the hearts and minds of travelers, offering a profound experience of India's spiritual essence.
                    </p>
                  </div>
                  <div className="info-right">
                    <div className="tree">
                      <a href="https://en.wikipedia.org/wiki/Varanasi" target="_blank">
                        <span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
                      </a>
                      <h4>
                        <a href="https://en.wikipedia.org/wiki/Varanasi" target="_blank">
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

export default Varanasi;
