import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import './Home.css'

function Home() {
  return (
    <>
      <Grid  className = "background"
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
              Seja bem vindo(a)!
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
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button className="button" variant="outlined">
              Meus produtos
            </Button>
            <Button className="button" variant="outlined">
              Novo produto
            </Button>
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
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  )
}
export default Home
