import React from 'react'
import './testimonail.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVT1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.'
  },
  {
    avatar:AVT2,
    name:'John Doe',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.'
  },
  {
    avatar:AVT3,
    name:'Elon Musk',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.'
  },
  {
    avatar:AVT4,
    name:'Jeff Bezos',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quas veniam. '
  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          
        </SwiperSlide>
            )
          })
        }

        
      </Swiper>
      
    </section>
  )
}

export default Testimonial
