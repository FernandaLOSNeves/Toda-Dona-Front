import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroVendedora } from '../../services/Service'
import User from '../../models/Vendedora';
import './CadastroVendedora.css';
import Vendedora from '../../models/Vendedora';
import { toast } from 'react-toastify';

function CadastroVendedora() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [vendedora, setVendedora] = useState<Vendedora>(
        {
            id: 0,
            nomeVendedora: '',
            cpf: '',
            foto_documento: '',
            endereco: '',
            telefone: '',
            email: '',
            senha: ''
        })

    const [vendedoraResult, setVendedoraResult] = useState<Vendedora>(
        {
            id: 0,
            nomeVendedora: '',
            cpf: '',
            foto_documento: '',
            endereco: '',
            telefone: '',
            email: '',
            senha: ''
        })

    useEffect(() => {
        if (vendedoraResult.id !== 0) {
            navigate("/login")
        }
    }, [vendedoraResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
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

        if (confirmarSenha === vendedora.senha && vendedora.senha.length >= 8) {

            try {
                await cadastroVendedora(`/vendedora/cadastrar`, vendedora, setVendedoraResult)
                toast.success('Vendedora cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.success('Vendedora cadastrada com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {
            toast.error("Confirmação de senha deve ser igual senha e deve conter 8 caracteres ou mais.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setVendedora({ ...vendedora, senha: "" })
            setConfirmarSenha("")
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box  className='cardcadastrar' paddingX={10} paddingY={10}>
                    <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className="textos2"> Cadastrar </Typography>


                        <TextField className='campocadastrar' value={vendedora.nomeVendedora} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeVendedora' label='Nome' variant='outlined' name='nomeVendedora' margin='normal' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf' margin='normal' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.foto_documento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto_documento' label='Link da foto do documento' variant='outlined' name='foto_documento' margin='normal' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='Endereço' variant='outlined' name='endereco' margin='normal' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.telefone} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='telefone' label='Telefone' variant='outlined' name='telefone' margin='normal' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' type='email' fullWidth></TextField>


                        <TextField className='campocadastrar' value={vendedora.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>


                        <TextField className='campocadastrar' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme a Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth></TextField>



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

export default CadastroVendedora;