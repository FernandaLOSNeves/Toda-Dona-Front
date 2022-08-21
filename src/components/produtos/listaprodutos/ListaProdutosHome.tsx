import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProdutosHome.css';
import { useNavigate } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';




function ListaProdutosHome() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token !== "") {
      toast.error("Você precisa estar logada", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getProduto()

  }, [produtos.length])

  return (
    <>
      <h1 className='centro'>Produtos</h1>
      <h3 className='centro'>Uma lista com todos os produtos</h3>
      <Grid xs={12} className='cardFlexProd'>
        {produtos.map(produto => (
          <Box m={2} className='cardFlex'>
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
        )
        )
        }
      </Grid>
    </>
  )
}

export default ListaProdutosHome;