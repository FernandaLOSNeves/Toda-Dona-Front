import React, {useState, useEffect, ChangeEvent} from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroVendedora } from '../../services/Service'
import User from '../../models/Vendedora';
import './CadastroVendedora.css';

function CadastroVendedora() {

    // let navigate = useNavigate();
    // const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    // const [user, setUser] = useState<User>(
    //     {
    //         id: 0,
    //         nome: '',
    //         usuario: '',
    //         senha: ''
    //     })

    // const [userResult, setUserResult] = useState<User>(
    //     {
    //         id: 0,
    //         nome: '',
    //         usuario: '',
    //         senha: ''
    //     })

    // useEffect(() => {
    //     if (userResult.id !== 0) {
    //         navigate("/login")
    //     }
    // }, [userResult])


    // function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
    //     setConfirmarSenha(e.target.value)
    // }


    // function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     })

    // }
    // async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()

    //     if (confirmarSenha === user.senha && user.senha.length >= 5) {

    //         try {
    //             await cadastroVendedora(`/usuarios/cadastrar`, user, setUserResult)
    //             alert("Usuário cadastrado com sucesso")

    //         } catch (error) {
    //             console.log(`Error: ${error}`)
                
    //             alert("Usuário deve ser um e-mail!")
    //         }

    //     } else {
    //         alert("Confirmação de senha deve ser igual senha e deve conter 5 caracteres ou mais.")    // Mensagem que indica a quantidade minima de caracteres

    //         setUser({ ...user, senha: "" })
    //         setConfirmarSenha("")           
    //     }
    // }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form /*onSubmit ={cadastrar}*/>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos2"> Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField  value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none2'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type= 'submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    )
}

export default CadastroVendedora;