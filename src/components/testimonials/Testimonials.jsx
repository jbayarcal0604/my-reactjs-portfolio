import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Pagination } from  'swiper/modules'


// Import Swiper Stles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Fatima Claire Arangcon',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus dolorem sunt inventore! Expedita eveniet repudiandae voluptatem ipsa, at voluptas inventore quos facilis non quis magnam distinctio, quisquam quas architecto.'
  },
  {
    avatar: AVTR2,
    name: 'John Anthony Bayarcal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus dolorem sunt inventore! Expedita eveniet repudiandae voluptatem ipsa, at voluptas inventore quos facilis non quis magnam distinctio, quisquam quas architecto.'
  },
  {
    avatar: AVTR3,
    name: 'Ronelo Sanchez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus dolorem sunt inventore! Expedita eveniet repudiandae voluptatem ipsa, at voluptas inventore quos facilis non quis magnam distinctio, quisquam quas architecto.'
  },
  {
    avatar: AVTR4,
    name: 'Marie Del Igot',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus dolorem sunt inventore! Expedita eveniet repudiandae voluptatem ipsa, at voluptas inventore quos facilis non quis magnam distinctio, quisquam quas architecto.'
  }
 

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from cleints</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
    
       {
        data.map(({avatar, name, review, index}) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}  />
             
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {review}
              </small>
  
          </SwiperSlide>
          )
        })
       }
      

      
      </Swiper>
    </section>
  )
}

export default Testimonials
