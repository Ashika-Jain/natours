import React from 'react';
import './bookings.css';
import { Link } from 'react-router-dom';
import ooty from '../../Assets/ooty.jpg';
import agra from '../../Assets/agra.jpg';
import alibaug from '../../Assets/Alibaug.jpg';
import amritsar from '../../Assets/amritsar.jpg';
import andamanAndNicobarIslands from '../../Assets/Andaman_and_Nicobar_Islands.jpg';
import bengaluru from '../../Assets/bengaluru.jpg';
import bhubaneswar from '../../Assets/bhubaneswar.jpg';
import chandigarh from '../../Assets/chandigarh.jpg';
import chennai from '../../Assets/chennai.jpg';
import coimbatore from '../../Assets/Coimbatore.jpg';
import darjeeling from '../../Assets/darjeeling.jpg';
import delhi from '../../Assets/delhi.jpg';
import gangtok from '../../Assets/gangtok.jpg';
import goa from '../../Assets/goa.jpg';
import guwahati from '../../Assets/guwahati.jpg';
import haridwar from '../../Assets/Haridwar.jpg';
import himachal from '../../Assets/himachal.jpg';
import jaipur from '../../Assets/jaipur.jpg';
import jaisalmer from '../../Assets/jaisalmer.jpg';
import jammu from '../../Assets/jammu.jpg';
import jodhpur from '../../Assets/Jodhpur.jpg';
import kanyakumari from '../../Assets/kanyakumari.jpg';
import ladakh from '../../Assets/ladakh.jpg';
import lonavala from '../../Assets/lonavala.jpg';
import lucknow from '../../Assets/lucknow.jpg';
import madurai from '../../Assets/Madurai.jpg';
import mahabalipuram from '../../Assets/Mahabalipuram.jpg';
import manali from '../../Assets/manali.jpg';
import mathura from '../../Assets/mathura.jpg';
import mountAbu from '../../Assets/Mount_Abu.jpg';
import mumbai from '../../Assets/mumbai.jpg';
import mussoorie from '../../Assets/mussoorie.jpg';
import nainital from '../../Assets/nainital.jpg';
import nepal from '../../Assets/nepal.jpg';
import pondicherry from '../../Assets/pondicherry.jpg';
import puri from '../../Assets/puri.jpg';
import rishikesh from '../../Assets/rishikesh.jpg';
import shillong from '../../Assets/shillong.jpg';
import shimla from '../../Assets/shimla.jpg';
import tawang from '../../Assets/tawang.jpg';
import udaipur from '../../Assets/udaipur.jpg';
import vadodara from '../../Assets/vadodara.jpg';
import vaishnoDevi from '../../Assets/vaishno_Devi.jpg';
import varanasi from '../../Assets/varanasi.jpg';


// Example data array
const cardData = [
  {
    imageUrl: andamanAndNicobarIslands,
    category: "Andaman And Nicobar Islands",
    heading: "Andaman And Nicobar Islands",
    path: "/andaman-and-nicobar-islands",
  },
  {
    imageUrl: agra,
    category: "Uttar Pradesh",
    heading: "Agra",
    path: "/agra",
  },
  {
    imageUrl: alibaug,
    category: "Maharashtra",
    heading: "Alibag",
    path: "/alibaug",
  },
  {
    imageUrl: amritsar,
    category: "Punjab",
    heading: "Amritsar",
    path: "/amritsar",
  },
  {
    imageUrl: bengaluru,
    category: "Karnataka",
    heading: "Bengaluru",
    path: "/bengaluru",
  },
  {
    imageUrl: bhubaneswar,
    category: "Odisha",
    heading: "Bhubaneswar",
    path: "/bhubaneswar",
  },
  {
    imageUrl: chandigarh,
    category: "Chandigarh",
    heading: "Chandigarh",
    path: "/chandigarh",
  },
  {
    imageUrl: chennai,
    category: "Tamil Nadu",
    heading: "Chennai",
    path: "/chennai",
  },
  {
    imageUrl: coimbatore,
    category: "Tamil Nadu",
    heading: "Coimbatore",
    path: "/coimbatore",
  },
  {
    imageUrl: darjeeling,
    category: "West Bengal",
    heading: "Darjeeling",
    path: "/darjeeling",
  },
  {
    imageUrl: delhi,
    category: "Delhi",
    heading: "Delhi",
    path: "/delhi",
  },
  {
    imageUrl: gangtok,
    category: "Sikkim",
    heading: "Gangtok",
    path: "/gangtok",
  },
  {
    imageUrl: goa,
    category: "Goa",
    heading: "Goa",
    path: "/goa",
  },
  {
    imageUrl: guwahati,
    category: "Assam",
    heading: "Guwahati",
    path: "/guwahati",
  },
  {
    imageUrl: haridwar,
    category: "Uttarakhand",
    heading: "Haridwar",
    path: "/haridwar",
  },
  {
    imageUrl: himachal,
    category: "Himachal Pradesh",
    heading: "Himachal Pradesh",
    path: "/himachal",
  },
  {
    imageUrl: jaipur,
    category: "Rajasthan",
    heading: "Jaipur",
    path: "/jaipur",
  },
  {
    imageUrl: jaisalmer,
    category: "Rajasthan",
    heading: "Jaisalmer",
    path: "/jaisalmer",
  },
  {
    imageUrl: jammu,
    category: "Jammu & Kashmir",
    heading: "Jammu",
    path: "/jammu",
  },
  {
    imageUrl: jodhpur,
    category: "Rajasthan",
    heading: "Jodhpur",
    path: "/jodhpur",
  },
  {
    imageUrl: kanyakumari,
    category: "Tamil Nadu",
    heading: "Kanyakumari",
    path: "/kanyakumari",
  },
  {
    imageUrl: ladakh,
    category: "Ladakh",
    heading: "Ladakh",
    path: "/ladakh",
  },
  {
    imageUrl: lonavala,
    category: "Pune",
    heading: "Lonavala",
    path: "/lonavala",
  },
  {
    imageUrl: lucknow,
    category: "Uttar Pradesh",
    heading: "Lucknow",
    path: "/lucknow",
  },
  {
    imageUrl: madurai,
    category: "Tamil Nadu",
    heading: "Madurai",
    path: "/madurai",
  },
  {
    imageUrl: mahabalipuram,
    category: "Tamil Nadu",
    heading: "Mahabalipuram",
    path: "/mahabalipuram",
  },
  {
    imageUrl: manali,
    category: "Himachal Pradesh",
    heading: "Manali",
    path: "/manali",
  },
  {
    imageUrl: mathura,
    category: "Uttar Pradesh",
    heading: "Mathura",
    path: "/mathura",
  },
  {
    imageUrl: mountAbu,
    category: "Rajasthan",
    heading: "Mount Abu",
    path: "/mount-abu",
  },
  {
    imageUrl: mumbai,
    category: "Mumbai",
    heading: "Mumbai",
    path: "/mumbai",
  },
  {
    imageUrl: mussoorie,
    category: "Uttarakhand",
    heading: "Mussoorie",
    path: "/mussoorie",
  },
  {
    imageUrl: nainital,
    category: "Uttarakhand",
    heading: "Nainital",
    path: "/nainital",
  },
  {
    imageUrl: nepal,
    category: "Nepal",
    heading: "Nepal",
    path: "/nepal",
  },
  {
    imageUrl: ooty,
    category: "Tamil Nadu",
    heading: "Ooty",
    path: "/ooty",
  },
  {
    imageUrl: pondicherry,
    category: "Puducherry",
    heading: "Pondicherry",
    path: "/pondicherry",
  },
  {
    imageUrl: puri,
    category: "Odisha",
    heading: "Puri",
    path: "/puri",
  },
  {
    imageUrl: rishikesh,
    category: "Uttarakhand",
    heading: "Rishikesh",
    path: "/rishikesh",
  },
  {
    imageUrl: shillong,
    category: "Meghalaya",
    heading: "Shillong",
    path: "/shillong",
  },
  {
    imageUrl: shimla,
    category: "Himachal Pradesh",
    heading: "Shimla",
    path: "/shimla",
  },
  {
    imageUrl: tawang,
    category: "Arunachal Pradesh",
    heading: "Tawang",
    path: "/tawang",
  },
  {
    imageUrl: udaipur,
    category: "Rajasthan",
    heading: "Udaipur",
    path: "/udaipur",
  },
  {
    imageUrl: vadodara,
    category: "Gujarat",
    heading: "Vadodara",
    path: "/vadodara",
  },
  {
    imageUrl: vaishnoDevi,
    category: "Jammu & Kashmir",
    heading: "Vaishno Devi",
    path: "/vaishno-devi",
  },
  {
    imageUrl: varanasi,
    category: "Uttar Pradesh",
    heading: "Varanasi",
    path: "/Varanasi",
  },
];


const handleViewMore = (path) => {
  window.location.href = path;
};

const Bookings = () => {
  return (
    <section className="hero-section shreya">
      <h1>Bookings</h1>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card__background" style={{backgroundImage: `url(${card.imageUrl})`}}></div>
            <div className="card__content">
              <p className="card__category">{card.category}</p>
              <h3 className="card__heading">{card.heading}</h3>
              <Link to={card.path} className="view-more-button">View More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Bookings;
