import React, { useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home2.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import ModalProduto from '../../components/produtos/modalProdutos/ModalProduto'

import CarouselComponent from '../../components/produtos/carrosel/CarouselComponent'
import TabProdutos2 from '../../components/produtos/tabprodutos/TabProdutos2'

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
          <Box>
          <CarouselComponent/>
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
          
        </Grid>
        <Grid xs={12} className="nav-home">
         <Box>
         
         </Box>
        </Grid>
        <Grid xs={12}>
         <TabProdutos2/>
        </Grid>
        
      </Grid>
    </>
  )
}
export default Home2
