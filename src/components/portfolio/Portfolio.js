import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/droneairgear.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:"https://m5a8u8t2.stackpathcdn.com/sites/default/files/styles/dynamic_tab/public/product/gfp/outdoor-classroom-equipment_0002_Kiddie%20Academy%20Headquarters-MD-Science%20%26%20Math-Pre-School%20Weather%20Station-View%2008.jpg?itok=52TW36I7",
    title:'Iot Based Weather Station Using ESP8266 & Hosting Realtime Results on Webpage',
    // github:'https://github.com/pratham2506/weatherstation',
    demo:'https://github.com/pratham2506/weatherstation'
  },
  {
    id:2,
    image:IMG2,
    title:'Complete Drone Related Ecosystem Platform Developed In ReactJS & Firesbase',
    // github:'https://github.com/pratham2506/droneairgear',
    demo:'https://droneairgear.com/'
  },
  {
    id:3,
    image:IMG3,
    title:'Institute Innovation Cell Website for Government Polytechnic Mumbai In HTML & PHP',
    // github:'https://github.com/pratham2506/gpmiic',
    demo:'https://gpminnovationcell.com/'
  },
  {
    id:4,
    image:"https://uptimefab.com/wp-content/uploads/2016/11/Dobot-first-impressionsFeatured-Image-2.jpg",
    title:'AI For Vision Based Robotic Arm (Dobot) Using Arduino Mega & Pixy2 Cam',
    // github:'https://github.com/pratham2506/dobot',
    demo:'https://github.com/pratham2506/dobot'
  },
  {
    id:5,
    image:"https://mbatechmeds.com/wp-content/uploads/2021/07/ESP-Node-Mcu.jpg",
    title:'Basic Projects To Get Hands-Onn with ESP8266 (NodeMCU) (working on more to add)',
    // github:'https://github.com/pratham2506/NodeMCU/tree/main',
    demo:'https://github.com/pratham2506/NodeMCU/tree/main'
  },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:'Crypto Currency Dashboard & Financial Visualization',
  //   github:'https://github.com',
  //   demo:'https://linkedin.com'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className='btn' target="_blank">Github</a> */}
                  <a href={demo} className='btn' target="_blank">Live Demo</a>
                </div>

              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
