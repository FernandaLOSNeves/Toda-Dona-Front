import { Grid } from '@material-ui/core';
import React from 'react'
// import { Typography, Grid, Button } from '@material-ui/core'
// import Box from '@mui/material'
import './Contato.css'

function Contato() {
  return (
    <>
      <Grid container className='padding'>
        <Grid item xs={12} className='textoConta'>
          <h1 className='quem'>Quem somos nós?</h1>
          <h2 className='branco2'>Nós somos todas as mulheres com vontade de empreender em um só lugar.<br />Um espaço só para elas.</h2>
        </Grid>
      </Grid>

      <Grid xs={12} className='quebra'>
        <h3 className='grand'>A TodaDona nasceu com a missão de ser um espaço exclusivo para mulheres realizarem compra e vendas de produtos e serviços com 0% de taxas de serviço cobradas pelo site. Para ajudar toda e qualquer mulher no desenvolvimento do seu negócio.</h3>
      </Grid>
      <Grid container className='contain'>
        <Grid item xs={3} className='card'>
          <h2 className='cardT'>Nossa Missão</h2>
          <h3>Nossa missão é incluir as mulheres no mercado de vendas online por meio da facilitação da venda de seus produtos ou serviços na internet.</h3>
        </Grid>
        <Grid item xs={3} className='card'>
          <h2 className='cardT'>Nossa Visão</h2>
          <h3>Criar um espaço virtual de vendas que permita que mulheres empreendedoras alcancem sua liberdade financeira.</h3>
        </Grid>
        <Grid xs={3} className='card2'>
          <h2 className='cardT'>Nossos Valores</h2>
          <h3>Respeito com todes</h3>
          <h3>Empatia</h3>
          <h3>Ética Profissional</h3>
          <h3>Comunicação aberta</h3>
        </Grid>
      </Grid>
      <Grid xs={12} className='redir'>
        <h3>Quer saber mais informações sobre nós? mande um email para <a className='cru' href="mailto:todainformada@gmail.com">todainformada@gmail.com</a></h3>
      </Grid>
      <Grid xs={12} className='redir'>
        <h3>Gostaria de ser uma investidora? escreva para: <a className='cru' href="mailto:todadonainvestidores@gmail.com">todadonainvestidores@gmail.com</a></h3>
      </Grid>
      <Grid xs={12} className='redir2'>
        <h3>Quer vender conosco? <a className='cru' href="/cadastro">Cadastre-se</a> ou faça <a className='cru' href="/login">login</a> para continuar.</h3>
      </Grid>
    </>
  )
}
export default Contato;