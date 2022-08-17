import React from 'react'
import Carousel from 'react-elastic-carousel'          


import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://www.acif.org.br/wp-content/uploads/2021/05/mulher-empreendedora.jpg"},
        { img: "https://www.rimaq.com.br/blog/wp-content/uploads/2018/09/239386-veja-como-anda-o-empreendedorismo-feminino-no-brasil.jpg" },
        { img: "https://atualiza.acicampinas.com.br/ADMblog/thumbs/235..jpg" },
        { img: "https://dlbcontabilidade.com.br/wp-content/uploads/2021/05/MEI-Mulher-Empreendedora-projeto-cria-regras-para-a-representa%C3%A7%C3%A3o-feminina-1.jpg" }
        
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