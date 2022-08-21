import React from 'react'
import Carousel from 'react-elastic-carousel'          


import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://imageshack.com/i/pnkBVnqYj"},
        { img: "https://imageshack.com/i/pn4UjYqzj" },
        { img: "https://imageshack.com/i/poIXBr5Kj" },
    ]

    return (
        <Carousel className='carosel' isRTL={false} enableAutoPlay autoPlaySpeed={5000} showArrows={false}>
            {
                items.map(item => (
                    <>
                        <img className='imgcar' src={item.img} alt="Item" />
                    </>
                ))
            }
        </Carousel>
   )
}

export default CarouselComponent