import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin'
import { login } from "../../services/Service";
import './Login.css'

function Login() {


    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [UserLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        cpf: '',
        senha: '',
        token: ''
    })

    useEffect(()=>{
        if(token !== ''){
            navigate('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...UserLogin,[e.target.name]:e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('UserLogin: '+ Object.values(UserLogin))
        try{
            await login (`/vendedora/logar`, UserLogin, setToken)
            alert('Login realizado com sucesso. Bem Vinda de Volta!');
        }catch(error){
            alert('Dados inválidos. Erro no login. Por favor, tente novamente.')
        }
    }


  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>

    {/* 1° tela do login  */}
    <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>
            <form>
                <Typography variant='h3' color='textPrimary' component='h3' align='center' gutterBottom style={{fontWeight:'bold'}} > Entrar</Typography>
                <TextField id='usuario' label='CPF' variant='outlined' name='usuario' margin='normal' fullWidth /> 
                <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth /> 

                {/* botão de login */}
                <Box marginTop={2} textAlign='center' >
                        <Button className='button-logar' type='submit' variant='contained' color='primary'> Logar </Button>  
                </Box>

            </form>

            <Box display='flex' justifyContent='center' marginTop={2} >
                <Box marginRight={1}>
                    <Typography variant="subtitle1" align="center" gutterBottom  >Não tem uma conta?</Typography>
                </Box>
                    <Link to='/CadastroUsuario'><Typography variant="subtitle1" align="center" style={{fontWeight:"bold"}} gutterBottom > 
                    Cadastre-se
                    </Typography></Link>
            </Box>

        </Box>
    </Grid>

    {/* parte direita a tela do login */}
    <Grid xs={6} style={{backgroundImage:`url(https://imagizer.imageshack.com/v2/779x464q90/r/924/SUD0SM.png)`, backgroundRepeat:"no-repeat", width:"70vh", minHeight:"70vh", backgroundSize:"cover", backgroundPosition:"center"}} >

    </Grid>

</Grid>
)
}
export default Login;