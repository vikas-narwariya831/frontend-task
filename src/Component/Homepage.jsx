import React from 'react'
import Navbar from './Navbar'
import BannerAndForm from './BannerAndForm'
import Carousel from './Carousel'
import Accordion from './Accordion'
import ImageAndtext from './ImageAndtext'
import Footer from './Footer'
function Homepage() {
  return (
    <div className='w-full overflow--x-hidden h-full'>
        <Navbar />
        <BannerAndForm />
        <Carousel />
        <Accordion/>
        <ImageAndtext />
        <Footer />
    </div>
  )
}

export default Homepage