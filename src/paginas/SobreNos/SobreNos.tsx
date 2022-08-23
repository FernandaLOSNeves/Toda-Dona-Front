import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";

import './SobreNos.css'

function SobreNos() {

    var sobreNosComponent;

    sobreNosComponent = <Grid className='container1' alignItems="center" xs={12}>
        <Box>
            <Typography variant='h1' align='center'>
                Sobre Nós
            </Typography>
        </Box>  

<Grid container className='padding'>
        <Grid item xs={12} className='textoConta'>
          <h1 className='quem'>Quem somos nós?</h1>
          <h2 className='branco2'>Nós somos todas as mulheres com vontade de empreender em um só lugar.<br />Um espaço só para elas.</h2>
        </Grid>
      </Grid>

      {/* <Grid xs={12} className='quebra'>
        <h3 className='grand'>A TodaDona nasceu com a missão de ser um espaço exclusivo para mulheres realizarem compra e vendas de produtos e serviços com 0% de taxas de serviço cobradas pelo site. Para ajudar toda e qualquer mulher no desenvolvimento do seu negócio.</h3>
      </Grid> */}
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
        
        
        <Box className='centro fundo branco2'>
            <a id="equipe"
            className="equipe">
                Equipe
            </a>
            <h3>Passe o mouse nas fotos para saber mais sobre os integrantes do grupo!
            </h3>
        </Box>           
        

        <Box className="boxC">
            <img className="bruna" src="https://media-exp1.licdn.com/dms/image/C4E03AQHQDKqGZxZmtA/profile-displayphoto-shrink_800_800/0/1646425879058?e=1666828800&v=beta&t=2tnZEj2P_xNQ6Zs3eOUwGDiJWuytRnaTiPOUzWP4De4" alt="Foto da Bruna" />
            <Typography className="brunaTexto">
                <h4>Bruna Franchi</h4>
            </Typography>
            <Typography className="aparText">
                <h1>Oi, eu sou a Bruna Franchi</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
        </Box>

        <Box className='boxL'>
        <img className="daniel" src="https://media-exp1.licdn.com/dms/image/C5603AQGQ78Zgkq7FrA/profile-displayphoto-shrink_800_800/0/1646353616320?e=1666828800&v=beta&t=gqemt-SVOLLhzcvpPtvYJLDLd8G2TK6Oj1Z-MvVHIvo" alt="" />
            <Typography className="aparTextDan">
                <h1>Oi, eu sou o Daniel Oliveira</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
            <Typography className="danielTexto">
                <h4>Daniel Oliveira</h4>
            </Typography>

        </Box>
        <Box className="boxC">
            <img className="bruna" src="https://media-exp1.licdn.com/dms/image/C4E03AQFhC9A46KcyXA/profile-displayphoto-shrink_800_800/0/1654030179481?e=1666828800&v=beta&t=wHY7zZ58TEvj3b81Jj1bNBZHoIRfZl7vrDT3nGMcY0o" alt="" />
            <Typography className="brunaTexto">
                <h4>Eduardo Franz</h4>
            </Typography>
            <Typography className="aparText">
                <h1>Oi, eu sou o Eduardo Franz</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
        </Box>
        <Box className="boxL">
            <img className="daniel" src="https://media-exp1.licdn.com/dms/image/C4E03AQGDi5KfveMj0A/profile-displayphoto-shrink_800_800/0/1646933657576?e=1666828800&v=beta&t=uGnIQvQjmW2tlFgV1QF2aHvkxv1J8HgNNN8PzgbHdvU" alt="" />
            <Typography className="aparTextDan">
                <h1>Oi, eu sou a Fernanda Lanza</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
            <Typography className="danielTexto">
                <h4>Fernanda Lanza</h4>
            </Typography>
        </Box>
        <Box className="boxC">
            <img className="bruna" src="https://media-exp1.licdn.com/dms/image/C4D03AQGp8ZScrIywZg/profile-displayphoto-shrink_800_800/0/1658236835987?e=1666828800&v=beta&t=pAX5tVkNN67_iXWKebXIGzKFZORDNCsRn8sLOCJQV-U" alt="" />
            <Typography className="brunaTexto">
                <h4>Fernanda Neves</h4>
            </Typography>
            <Typography className="aparText">
                <h1>Oi, eu sou a Fernanda Neves</h1>
                <h4>Eu sou a Fernanda Neves, tenho 31 anos, sou Engenheira Química e Bacharela em Ciência e Tecnologia pela Federal de Alfenas e faço Pós em Engenharia de Qualidade, além de ter feito o bootcamp da Generation Brasil. 
Estagiei e trabalhei em áreas das engenharias de materiais e ambiental, mas o que eu amava estudar era programação. Vi na Generation a oportunidade de direcionar minha transição de carreira como desenvolvedora web em Java. 
Sou resiliente, criativa e comunicativa, e no projeto pude desenvolver mais essas habilidades trabalhando em equipe.
</h4>
            </Typography>
        </Box>
        <Box className="boxL">
            <img className="daniel" src="https://imageshack.com/i/pnubCgFlj" alt="" />
            <Typography className="aparTextDan">
                <h1>Oi, eu sou o Jair Siqueira</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
            <Typography className="danielTexto">
                <h4>Jair Siqueira</h4>
            </Typography>
        </Box>
        <Box className="boxC"><img className="bruna" src="https://imageshack.com/i/pnb2V4ojj" alt="" />
            <Typography className="brunaTexto">
                <h4>Matheus Victor</h4>
            </Typography>
            <Typography className="aparText">
                <h1>Oi, eu sou o Matheus Victor</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi tortor, porttitor vitae lacus a, luctus porttitor magna. Curabitur at ante at turpis sollicitudin suscipit. Integer at nisi ut magna suscipit imperdiet. Donec vehicula rhoncus pellentesque. Sed faucibus auctor tellus, sit amet iaculis massa vulputate ac. Donec fermentum vitae diam non suscipit. Integer vulputate, nunc vel euismod eleifend, nisi libero pretium leo, et faucibus dui neque vitae quam.</h4>
            </Typography>
        </Box>

    </Grid>

    return (
        <>
            {sobreNosComponent}
        </>
    )
}

export default SobreNos
