import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProdutos.css';
import { useNavigate } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';




function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  //   useEffect(() => {
  //     if (token == "") {
  //         toast.error("Você precisa estar logada", {
  //             position: "top-right",
  //             autoClose: 3500,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: 'light'
  //         });
  //         navigate("/login");
  //     }
  // }, [token]);

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
      {
        produtos.map(produto => (

          <Box m={6} className='cardtamanho' >
            <Card className='cardb' variant="outlined">
              <CardContent  >
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome_produto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao_produto}
                </Typography>
                <Box>
                  <img src={produto.fotoProduto} alt="foto produto" className="imagem-produto" />
                </Box>

                <Typography variant="body2" component="p">
                  {produto.categorias?.categoria}
                </Typography>
                <Typography variant="body2" component="p">R$
                  {produto.valor_produto}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>

                </Box>
              </CardActions>
            </Card>
          </Box>

        ))
      }
    </>
  )
}

export default ListaProdutos;

