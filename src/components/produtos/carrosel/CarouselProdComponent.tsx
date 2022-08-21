import { Button, Card, CardContent, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link, useNavigate } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { busca } from '../../../services/Service'
import '../listaprodutos/ListaProdutosHome.css'

import './CarouselProdComponent.css'

function CarouselProdComponent() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    let navigate = useNavigate();

    async function getProduto() {
        await busca("/produto", setProdutos, {})
    }


    useEffect(() => {
        getProduto()

    }, [produtos.length])

    return (
        <Carousel
            className='carosel'
            isRTL={false}
            showArrows={true}
            itemsToShow={3}
        >
            {
                produtos.map(produto => (

                    <Box m={2} className='cardtamanho cardFlex2' >
                        <Card className='cardb' variant="outlined">
                        <CardContent>
                <Typography className='tipo' variant="h5" component="h2">
                  {produto.nome_produto}
                </Typography>
                <Typography className='tamanhodescricao tipo' variant="body2" component="p">
                  {produto.descricao_produto}
                </Typography>
                <Box>
                <img src={produto.fotoProduto} alt="foto produto" className="img" />
                </Box>

                <Typography className='tipo' variant="body2" component="p">
                  {produto.categorias?.categoria}
                </Typography>
                <Typography className='tipo' variant="h4" component="p">
                  R${produto.valor_produto}
                </Typography>
                <Link to={`/cadastroUsuario`} className="text-decorator-none">
                    <Box mx={1}>
                <Button className='btncarrinho' variant="contained" size='small' color="secondary">
                        adicionar ao carrinho
                      </Button>
                      </Box>
                  </Link>
              </CardContent>
                        </Card>
                    </Box>
                ))
            }
        </Carousel>
    )
}

export default CarouselProdComponent