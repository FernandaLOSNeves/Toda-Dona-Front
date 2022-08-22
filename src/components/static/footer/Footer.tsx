import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Typography, Grid, Button, TextField } from '@material-ui/core'
import { Box } from '@mui/material'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={2} className="background-2">
          <Box paddingX={10} paddingY={2}>
            <Typography className="fonte2" gutterBottom color="textPrimary">
              Site
            </Typography>
            <Link to='/produtos'>
              <Typography className="fonte1" gutterBottom color="textPrimary">
                Produtos
              </Typography>
            </Link>
            <Link to='/produtos'>
              <Typography className="fonte1" gutterBottom color="textPrimary">
                Serviços
              </Typography>
            </Link>
            <Link to="/categorias">
              <Typography className="fonte1" gutterBottom color="textPrimary">
                Categorias
              </Typography>
            </Link>
            <Typography className="fonte1" gutterBottom color="textPrimary">
              Vendedora
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className="background-2">
          <Box paddingX={5} paddingY={5}>
            <Typography className="fonte2" gutterBottom color="textPrimary">
              Assine a nossa<br /> Newsletter
            </Typography>

            <Typography className="fonte1" color="textPrimary">
              Para ficar toda informada sobre novidades
            </Typography>
            <TextField
              className='textfield'
              id="email"
              label="E-mail"
              name="email"
              margin="normal"
              type="email"
              variant="outlined"
              fullWidth
            ></TextField>
            <Button
              className='botao'>
              enviar
            </Button>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={3} className="background-2">
          <Box paddingX={5} paddingY={2}>
            <Link to='/sobrenos'>
              <Typography className="fonte2" gutterBottom color="textPrimary">
                Sobre nós
              </Typography>
            </Link>
            <a
              className='text-decorator-none fonte1'
              href="/sobrenos"
              onClick={e => {
                let equipe = document.getElementById("equipe");
                e.preventDefault();  // Stop Page Reloading
                equipe && equipe.scrollIntoView();}}>
                  Equipe
                </a>
          <Typography className="fonte1" gutterBottom color="textPrimary">
            O modelo TodaDona
          </Typography>
        </Box>
      </Grid>
      <Grid alignItems="center" item xs={3} className="background-2">
        <Box paddingX={5} paddingY={2}>
          <Link to='/contato'>
            <Typography className="fonte2" gutterBottom color="textPrimary">
              Contato
            </Typography>
          </Link>
          <Typography className="fonte1" gutterBottom color="textPrimary">
            Investidores
          </Typography>
          <Typography className="fonte1" gutterBottom color="textPrimary">
            Imprensa
          </Typography>
        </Box>
      </Grid>
      <Grid alignItems="center" item xs={12}>
        <Box className="box1">
          <Box display="flex" alignItems="center" justifyContent="center">
            <a
              href="https://www.facebook.com/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="redes" />
            </a>
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="redes" />
            </a>
            <a
              href="https://www.linkedin.com/school/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="redes" />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className="textos"
            >
              © 2022 Copyright: TodaDona Inc.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              className="textos"
              align="center"
            >
              https://todadona.com.br
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}
export default Footer