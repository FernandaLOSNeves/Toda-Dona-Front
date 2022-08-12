import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    function goLogout() {
        setToken('')
        alert("Usuário Deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" color='secondary'>
                <Toolbar className="backnav" variant="dense">
                    <Box className='tdLogo'>
                        <img className='tamImg' src="https://imageshack.com/i/poSUD0SMp" alt="TodaDona Logo" />
                    </Box>
                    <Box className='espaco'>
                        <Box display="flex" justifyContent="start" className='corNav'>
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Home
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/categorias' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Categorias
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/produtos' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Produtos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/cadastrarCategoria' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Cadastrar Categoria
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/formularioProduto' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Cadastrar Produto
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to='/contato' className='text-decorator-none'>
                                <Box mx={1} className='corNav'>
                                    <Typography variant="h6" color="inherit">
                                        • Contato
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} className='container' onClick={goLogout}>
                                <Typography variant="h6" color="inherit" className='cursor'>
                                    • Sair
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;