import React from 'react'
import { Box } from '@mui/material'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core'
// import Box from '@mui/material'
import './Contato.css'

function Contato() {
  return (
    <>
      <Grid container className="padding">
        <Grid item xs={12} className="textoConta">
          <Typography className="quem">Quem somos nós?</Typography>
          <Typography className="branco2">
            Nós somos todas as mulheres com vontade de empreender em um só
            lugar.
          </Typography>
          <Typography className="branco2">Um espaço só para elas.</Typography>
        </Grid>
      </Grid>

      <Grid xs={12} className="quebra">
        <Typography className="grand">
          A TodaDona nasceu com a missão de ser um espaço exclusivo para
          mulheres realizarem compra e vendas de produtos e serviços com 0% de
          taxas de serviço cobradas pelo site. Para ajudar toda e qualquer
          mulher no desenvolvimento do seu negócio.
        </Typography>
      </Grid>

      <Box m={6} className="cardsContato">
        <Card className="cardInvid">
          <CardContent>
            <Typography className="typo1">Nossa Missão</Typography>
            <Typography className="typo2">
              Nossa missão é incluir as mulheres no mercado de vendas online por
              meio da facilitação da venda de seus produtos ou serviços na
              internet.
            </Typography>
          </CardContent>
        </Card>
        <Card className="cardInvid">
          <CardContent>
            <Typography className="typo1">Nossa Visão</Typography>

            <Typography className="typo2">
              Criar um espaço virtual de vendas que permita que mulheres
              empreendedoras alcancem sua liberdade financeira.
            </Typography>
          </CardContent>
        </Card>
        <Card className="cardInvid">
          <CardContent>
            <Typography className="typo1"> Nossos Valores </Typography>
            <Typography className="typo2">
              Respeito com todes, empatia, ética profissional e comunicação
              aberta.{' '}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Grid xs={12} className="redir">
        <Typography className="typo2">
          {' '}
          Quer saber mais informações sobre nós? Mande um email para{' '}
          <a className="cru" href="mailto:todainformada@gmail.com">
            todainformada@gmail.com
          </a>{' '}
        </Typography>
      </Grid>
      <Grid xs={12} className="redir">
        <Typography className="typo2">
          {' '}
          Gostaria de ser uma investidora? Escreva para:{' '}
          <a className="cru" href="mailto:todadonainvestidores@gmail.com">
            todadonainvestidores@gmail.com
          </a>
        </Typography>
      </Grid>
      <Grid xs={12} className="redir2">
        <Typography className="typo2">
          Quer vender conosco?{' '}
          <a className="cru" href="/cadastro">
            Cadastre-se
          </a>{' '}
          ou faça{' '}
          <a className="cru" href="/login">
            Login
          </a>{' '}
          para continuar.
        </Typography>
      </Grid>
    </>
  )
}
export default Contato
