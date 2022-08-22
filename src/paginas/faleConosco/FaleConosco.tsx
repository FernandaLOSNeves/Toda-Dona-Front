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
                <Typography className = "titulo2">Estamos aqui para te atender e te escutar.</Typography>
            </Grid>

            <Grid item xs={6} alignItems='flex-end'>
                <Box paddingX={10} paddingY={10}>
                    <form>
                        <Typography gutterBottom color='textPrimary' className="textos2"> Em que podemos te ajudar? </Typography>

                        <Typography className= "letras"> Seu nome: </Typography>

                        <TextField className='margin-bottom' label= "nome" id='nome' variant='outlined' name='nome' fullWidth></TextField>

                        

                        <Typography className= "letras"> Seu e-mail: </Typography>

                        <TextField className='margin-bottom' id='email' label='e-mail:' variant='outlined' name='email' fullWidth></TextField>

                        

                        <Typography className= "letras"> Assunto: </Typography>

                        <TextField className='margin-bottom' id='assunto' label='assunto' variant='outlined' name='assunto' fullWidth></TextField>


                        <Typography className= "letras"> Sua mensagem pra gente: </Typography>

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