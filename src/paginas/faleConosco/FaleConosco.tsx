import React from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './FaleConosco.css';

function FaleConosco() {

    return (

        <Grid container>

            <Grid item className='padding00' xs={12}>
                <Typography className='titulo1'> Fale com a gente! </Typography>
                <Typography className="titulo2">Estamos aqui para te atender e te escutar.</Typography>
            </Grid>

            <Grid item xs={6} alignItems='flex-end'>
                <svg className='amoeba' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#A30F9E" d="M25.7,-34.9C40.3,-24.7,64,-26.6,76.7,-17.8C89.4,-9,91,10.6,81.3,22C71.5,33.5,50.4,36.9,35,36.6C19.5,36.4,9.8,32.4,-3.9,37.8C-17.5,43.1,-35,57.7,-49,57.5C-63,57.3,-73.5,42.3,-72.1,27.8C-70.7,13.4,-57.5,-0.5,-52.4,-17.2C-47.2,-34,-50.2,-53.6,-42.8,-66.1C-35.4,-78.7,-17.7,-84.2,-6.1,-75.8C5.5,-67.4,11,-45.1,25.7,-34.9Z" transform="translate(100 100)" />
                </svg>
                <Box paddingX={10} paddingY={10}>
                    <form>
                        <Typography gutterBottom color='textPrimary' className="textos2"> Em que podemos te ajudar? </Typography>

                        <Typography className="letras"> Seu nome: </Typography>

                        <TextField className='margin-bottom' label="nome" id='nome' variant='outlined' name='nome' fullWidth></TextField>



                        <Typography className="letras"> Seu e-mail: </Typography>

                        <TextField className='margin-bottom' id='email' label='e-mail:' variant='outlined' name='email' fullWidth></TextField>



                        <Typography className="letras"> Assunto: </Typography>

                        <TextField className='margin-bottom' id='assunto' label='assunto' variant='outlined' name='assunto' fullWidth></TextField>


                        <Typography className="letras"> Sua mensagem pra gente: </Typography>

                        <TextField className='margin-bottom' id='mensagem' label='mensagem' variant='outlined' name='mensagem' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>


                            <Link to='/' className='text-decorator-none2'>
                                <Button type='submit' variant='contained' className='btnCad margin-right'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default FaleConosco;