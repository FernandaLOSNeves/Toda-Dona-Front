import React, { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ModalProduto from '../../components/produtos/modalLogin/ModalLogin'
import TabProdutos from '../../components/produtos/tabprodutos/TabProdutos'
import CarouselComponent from '../../components/produtos/carrosel/CarouselComponent'
import ModalLogin from '../../components/produtos/modalLogin/ModalLogin'

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token !== "") {
      // alert("Você precisa estar logado")
      navigate("/home")

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
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob'>
          <path fill="#A30F9E" d="M37.3,-41.1C45.7,-28.9,48.1,-14.4,46.8,-1.2C45.6,11.9,40.7,23.9,32.3,30C23.9,36.1,11.9,36.4,-4.8,41.2C-21.6,46,-43.2,55.4,-58.4,49.3C-73.7,43.2,-82.7,21.6,-79.6,3.1C-76.5,-15.3,-61.2,-30.7,-46,-42.9C-30.7,-55.2,-15.3,-64.4,-0.5,-63.9C14.4,-63.5,28.9,-53.4,37.3,-41.1Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob2'>
          <path fill="#A30F9E" d="M37.3,-41.1C45.7,-28.9,48.1,-14.4,46.8,-1.2C45.6,11.9,40.7,23.9,32.3,30C23.9,36.1,11.9,36.4,-4.8,41.2C-21.6,46,-43.2,55.4,-58.4,49.3C-73.7,43.2,-82.7,21.6,-79.6,3.1C-76.5,-15.3,-61.2,-30.7,-46,-42.9C-30.7,-55.2,-15.3,-64.4,-0.5,-63.9C14.4,-63.5,28.9,-53.4,37.3,-41.1Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob3'>
          <path fill="#FFFFFF" d="M32.9,-25.6C39.1,-18.4,38.3,-5,35.8,9.1C33.3,23.1,29.2,37.6,17.2,48.1C5.2,58.7,-14.6,65.2,-29.3,58.9C-43.9,52.6,-53.2,33.4,-54.3,16C-55.4,-1.4,-48.3,-17.1,-37.9,-25.2C-27.4,-33.4,-13.7,-33.9,-0.2,-33.8C13.3,-33.6,26.7,-32.8,32.9,-25.6Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob4'>
          <path fill="#FFFFFF" d="M32.9,-25.6C39.1,-18.4,38.3,-5,35.8,9.1C33.3,23.1,29.2,37.6,17.2,48.1C5.2,58.7,-14.6,65.2,-29.3,58.9C-43.9,52.6,-53.2,33.4,-54.3,16C-55.4,-1.4,-48.3,-17.1,-37.9,-25.2C-27.4,-33.4,-13.7,-33.9,-0.2,-33.8C13.3,-33.6,26.7,-32.8,32.9,-25.6Z" transform="translate(100 100)" />
        </svg>
        <Grid alignItems="center" item xs={8}>
          <Box paddingX={20} className='tamBem'>
            <Typography
              className="fonte ext"
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
            >
              Seja Bem Vinda!
            </Typography>
            <Typography
              className="fonte"
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
            >
              O que você quer vender hoje?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" className='MuiGrid-container'>
            <Link to='/produtos' className="text-decorator-none">
              <Button className="button" variant="outlined">
                Meus produtos
              </Button>
            </Link>
            <Link to='/formularioProduto' className="text-decorator-none">
              <Button className="button" variant="outlined">
                Novo produto
              </Button>
            </Link>
          </Box>
        </Grid>
        {/* <Grid item xs={4}>
          <img
            src="https://imagizer.imageshack.com/v2/1000x596q90/924/SUD0SM.png"
            alt=""
            width="700px"
            height="500px"
          />
        </Grid> */}

        <Grid xs={12} className="nav-home">
          <Box>

          </Box>
        </Grid>
        <Grid xs={12}>
          <TabProdutos />
        </Grid>

      </Grid>
    </>
  )
}
export default Home
