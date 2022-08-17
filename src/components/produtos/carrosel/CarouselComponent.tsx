import React from 'react'
import Carousel from 'react-elastic-carousel'          


import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://imageshack.com/i/pomDIywAj"},
        { img: "https://imageshack.com/i/pmM1upwej" },
        { img: "https://imageshack.com/i/pnOq8fICj" },
        
        
    ]

    return (
        <Carousel isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img className='img' src={item.img} alt="Item" />
                    </>
                ))
            }
        </Carousel>
    )
}

export default CarouselComponent