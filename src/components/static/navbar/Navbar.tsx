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

                    <Box display="flex" justifyContent="start" className='corNav'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='corNav'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/cadastrarCategoria' className='text-decorator-none'>
                            <Box mx={1} className='corNav'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Categoria
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box mx={1} className='corNav'>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box>
                        <Link to='/login' className='container'>
                            <Box mx={1} className='container'>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;