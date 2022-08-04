import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/service';
import Vendedora from '../../models/Vendedora';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [usuario, setUsuario] = useState<Vendedora>({
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: ''
        })

    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: '',
        foto: '',
        usuario: '',
        senha: ''
    })

    useEffect(() => {
        if (usuarioResult.id != 0) {
            history('/login')
        }
    }, [usuarioResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (confirmarSenha == usuario.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResult)
            alert('Usuario cadastrado com sucesso!')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='pad'>
            <Grid item xs={4} className='imagemCadastro'><h1> </h1></Grid>
            <Grid item xs={8} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='cadst'>Cadastre-se</Typography>
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth className='campo' />
                        <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth className='campo'/>
                        <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Email' variant='outlined' name='usuario' margin='normal' fullWidth className='campo'/>
                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='campo'/>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='Confirmarsenha' label='Confirmar senha' variant='outlined' name='Confirmarsenha' margin='normal' type='password' fullWidth className='campo'/>
                        <Box marginTop={2} textAlign='center'>
                
                            <Button type='submit' variant='outlined' className='btn'>
                                Cadastrar
                            </Button>
                            
                            <Link to='/' className='text-decorator-none2'>
                                <Button variant='outlined' className='btn2'>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}


export default CadastroUsuario;