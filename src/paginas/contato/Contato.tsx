import { Grid } from '@material-ui/core';
import React from 'react'
// import { Typography, Grid, Button } from '@material-ui/core'
// import Box from '@mui/material'
import './Contato.css'

function Contato() {
  return (
    <>
    <Grid container>
      <Grid xs={8}>
        <h1>Quem somos nós</h1>
        <h2>Nós somos todas as mulheres com vontade de empreender em um só lugar.<br/>Um espaço só para elas.</h2>
        <h3>A TodaDona nasceu com a missão de ser um espaço exclusivo para mulheres realizarem compra e vendas de produtos e serviços com 0% de taxas de serviço cobradas pelo site. Para ajudar toda e qualquer mulher no desenvolvimento do seu pequeno negócio.</h3>
      </Grid>
      <Grid xs={4}>
        <img src="https://psiueducacao.com/wp-content/uploads/2019/05/mulheres-empreendedoras.jpg" alt="mulheres-empreendedoras" />
      </Grid>
      <Grid xs={3}>
        <h2>Nossa Missão</h2>
        <h3>Nossa missão é incluir as mulheres no mercado de vendas online por meio da facilitação da venda de seus produtos ou serviços na internet.</h3>
      </Grid>
      <Grid xs={3}>
        <h2>Nossa Visão</h2>
        <h3>Criar um espaço virtual de vendas que permita que mulheres empreendedoras alcancem sua liberdade financeira.</h3>
      </Grid>
      <Grid xs={3}>
        <h2>Nossos Valores</h2>
        <h3>
          <ul>
            <li>Respeito com todes</li>
            <li>Empatia</li>
            <li>Ética Profissional</li>
            <li>Comunicação aberta</li>
          </ul>
        </h3>
      </Grid>
      <Grid xs={6}>
        <h2>Quer saber mais informações sobre nós? mande um email para <a href="mailto:todainformada@gmail.com">todainformada@gmail.com</a></h2>
      </Grid>
      <Grid xs={6}>
        <h2>Gostaria de ser um/a investidor/a? escreva para: <a href="mailto:todadonainvestidores@gmail.com">todadonainvestidores@gmail.com</a></h2>
      </Grid>
      <Grid xs={12}>
        <h3>Quer vender conosco? Cadastre-se ou faça login para continuar.</h3>
      </Grid>
    </Grid>
    </>
  )
}
export default Contato;