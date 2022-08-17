import React from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


function CadastroUsuario() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} paddingY={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos2"> Cadastre-se para fazer uma compra </Typography>


                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>

                        <TextField id='sobrenome' label='Sobrenome' variant='outlined' name='sobrenome' margin='normal' fullWidth></TextField>

                        <TextField id='cpf' label='Cpf' variant='outlined' name='cpf' margin='normal' fullWidth></TextField>

                        <TextField id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth></TextField>

                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>

                        <TextField id='confirmarSenha' label='Confirme a Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' className='btnCad'>
                                Cadastrar
                            </Button>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button variant='contained' className='btnCancelar'>
                                Cancelar
                                </Button>
                            </Link>

                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default CadastroUsuario;