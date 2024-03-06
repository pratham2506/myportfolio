import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/droneairgear.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/calculator.png'
import IMG8 from '../../assets/IMG4.png'
import IMG9 from '../../assets/encrypt.png'
import IMG10 from '../../assets/gpt.png'


const data = [
  {
    id:1,
    image:"https://www.sevensensor.com/files/2022/05/Why-are-the-Meteorological-Sensors-Required-for-PV-Plants.jpg",
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
  // {
  //   id:5,
  //   image:"https://mbatechmeds.com/wp-content/uploads/2021/07/ESP-Node-Mcu.jpg",
  //   title:'Basic Projects To Get Hands-Onn with ESP8266 (NodeMCU) (working on more to add)',
  //   // github:'https://github.com/pratham2506/NodeMCU/tree/main',
  //   demo:'https://github.com/pratham2506/NodeMCU/tree/main'
  // },
  {
    id:6,
    image:IMG7,
    title:'Basic calculator webapp project in React JS',
    // github:'https://github.com/pratham2506/NodeMCU/tree/main',
    demo:'https://calculator-95421.web.app/'
  },
  {
    id:7,
    image:"https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg",
    title:'NodeJS & MongoDB url shortner using postman for testing and application',
    // github:'https://github.com/pratham2506/NodeMCU/tree/main',
    demo:'https://github.com/pratham2506/nodejs-urlshortner/tree/44b42e25a088e45b961b6f8da3ea3de7f062262a'
  },
  {
    id:8,
    image:IMG8,
    title:'E-commerce Website Scraping Tool using Jupyter Notebook ',
    // github:'https://github.com/pratham2506/NodeMCU/tree/main',
    demo:'https://github.com/pratham2506/ecom-webscrapper/tree/main'
  },
  {
    id:9,
    image:IMG9,
    title:'Message Encryption - Decryption tool using Python',
    // github:'https://github.com',
    demo:'https://github.com/pratham2506/encrypt-decrypt'
  },
  {
    id:10,
    image:IMG10,
    title:'Gen AI chatbot with ChatGPT API Integration',
    // github:'https://github.com',
    demo:'https://github.com/pratham2506/gpt_terminal_chatbot'
  }
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
                
                  <a href={demo} className='projectlink' target="_blank"><h3>{title}</h3></a>
                {/* <div className="portfolio__item-cta"> */}
                  {/* <a href={github} className='btn' target="_blank">Github</a> */}
                {/* </div> */}

              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
