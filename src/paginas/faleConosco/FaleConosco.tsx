import React from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './FaleConosco.css';

function FaleConosco() {

    return (
      
        <Grid container>

            <Grid item className='padding00' xs={12}>
                <h1 className='titulo1'>Fale com a gente!</h1>
                <h2 className='titulo2'>Estamos aqui para te atender e te escutar.<br/><br/></h2>
            </Grid>

            <Grid item xs={6} alignItems='flex-end'>
                <Box paddingX={10} paddingY={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' className="textos2"> No que podemos te ajudar? </Typography>

                        <Typography className= "letras"> Seu nome: </Typography>

                        <TextField label= "nome" id='nome' variant='outlined' name='nome' fullWidth></TextField>

                        <br></br>
                        <br></br>

                        <Typography className= "letras"> Seu e-mail: </Typography>

                        <TextField id='email' label='e-mail:' variant='outlined' name='email' fullWidth></TextField>

                        <br></br>
                        <br></br>

                        <Typography className= "letras"> Assunto: </Typography>

                        <TextField id='assunto' label='assunto' variant='outlined' name='assunto' fullWidth></TextField>

                        <br></br>
                        <br></br>

                        <Typography className= "letras"> Sua mensagem pra gente: </Typography>

                        <TextField id='mensagem' label='mensagem' variant='outlined' name='mensagem' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>

                        <br></br>
                        <br></br>

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