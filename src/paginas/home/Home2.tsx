import React, { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home2.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ModalProduto from '../../components/produtos/modalProdutos/ModalProduto'
import TabProdutos from '../../components/produtos/tabprodutos/TabProdutos'
import CarouselComponent from '../../components/produtos/carrosel/CarouselComponent'

function Home2() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      navigate("/")

    }
  }, [token])


  return (
    <>
      <Grid className="background"        
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              className="fonte"
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Seja bem-vindo!
            </Typography>
            <Typography
              className="fonte"
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
            >
              O que você procura hoje?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalProduto/>
            </Box>
            <Link to='/produtos' className="text-decorator-none">
              <Button className="button" variant="outlined">
                Ver produtos
              </Button>
            </Link>
            <Link to='/contato' className="text-decorator-none">
              <Button className="button" variant="outlined">
                Quem somos
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://imagizer.imageshack.com/v2/1000x596q90/924/SUD0SM.png"
            alt=""
            width="700px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <CarouselComponent/>
        </Grid>
        <Grid xs={12} className="nav-home">
         <Box>
         
         </Box>
        </Grid>
        {/* <Grid xs={12}>
         <TabProdutos/>
        </Grid> */}
        
      </Grid>
    </>
  )
}
export default Home2
