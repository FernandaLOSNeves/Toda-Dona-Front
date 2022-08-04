import React, {useState, useEffect, ChangeEvent} from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroVendedora } from '../../services/Service'
import User from '../../models/Vendedora';
import './CadastroVendedora.css';
import Vendedora from '../../models/Vendedora';

function CadastroVendedora() {

     let navigate = useNavigate();
     const [confirmarSenha,setConfirmarSenha] = useState<String>("")
     const [vendedora, setVendedora] = useState<Vendedora>(
         {
            id: 0,
            nomeVendedora: "",
            cpf: "",
            foto_documento: "",
            endereco: "",
            telefone: "",
            email: "",
            senha: ""
         })

     const [vendedoraResult, setVendedoraResult] = useState<User>(
         {
            id: 0,
            nomeVendedora: "",
            cpf: "",
            foto_documento: "",
            endereco: "",
            telefone: "",
            email: "",
            senha: ""
         })

     useEffect(() => {
         if (vendedoraResult.id !== 0) {
             navigate("/login")
         }
     }, [vendedoraResult])


     function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
         setConfirmarSenha(e.target.value)
     }


     function updatedModel(e: ChangeEvent<HTMLInputElement>) {

         setVendedora({
             ...vendedora,
             [e.target.name]: e.target.value
         })

     }
     async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
         e.preventDefault()

         if (confirmarSenha === vendedora.senha && vendedora.senha.length >= 5) {

             try {
                 await cadastroVendedora(`/usuarios/cadastrar`, vendedora, setVendedoraResult)
                 alert("Usuário cadastrado com sucesso")

             } catch (error) {
                 console.log(`Error: ${error}`)
                
                 alert("Usuário deve ser um e-mail!")
             }

         } else {
             alert("Confirmação de senha deve ser igual senha e deve conter 5 caracteres ou mais.")    // Mensagem que indica a quantidade minima de caracteres

             setVendedora({ ...vendedora, senha: "" })
             setConfirmarSenha("")           
         }
     }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form /*onSubmit ={cadastrar}*/>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos2"> Cadastrar</Typography>
                        <TextField value={vendedora.nomeVendedora} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth></TextField>
                        <TextField  value={vendedora.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf' margin='normal' fullWidth></TextField>
                        <TextField  value={vendedora.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='fotoDoc' label='Foto do seu Documento' variant='outlined' name='fotoDoc' margin='normal' fullWidth></TextField>
                        <TextField  value={vendedora.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='cpf' variant='outlined' name='cpf' margin='normal' fullWidth></TextField>
                        <TextField  value={vendedora.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='cpf' variant='outlined' name='cpf' margin='normal' fullWidth></TextField>
                        <TextField value={vendedora.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
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