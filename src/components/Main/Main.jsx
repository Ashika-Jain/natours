import React, {useEffect} from 'react'
import './main.css'

import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(1).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:3,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:4,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:5,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:6,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:7,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:8,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },

  {
    id:9,
    imgSrc: img,
    destTitle: 'ABC',
    location: 'India',
    grade: 'Cultural Relax',
    fees: 'Rs. 7000',
    description: 'XYZ'
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSr, destTitle, location, grade, fees, description })=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">{

              }
              <div className="imageDiv">
                <img src={img} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                <i class="fa-light fa-location-dot"/>
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className='btn flex'>
                DETAILS <i class="fa-light fa-clipboard"/>
              </button>
            </div>
            </div>
        )
      })
    }
  </div>
      

</section>
  )
}

export default Main
