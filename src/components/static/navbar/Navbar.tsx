import React, { useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
       navigate('/login')
    }
    
    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" color='secondary'>
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
        
    } else{

        navbarComponent = <AppBar position="static" color='secondary'>
        <Toolbar className="backnav" variant="dense">
            <Box className='tdLogo'>
                <img className='tamImg' src="https://imageshack.com/i/poSUD0SMp"  alt="TodaDona Logo" />
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

                    
                    <Link to='/produtos' className='text-decorator-none'>
                        <Box mx={1} className='corNav'>
                            <Typography variant="h6" color="inherit">
                                • Produtos
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

                    <Link to='/login' className='text-decorator-none'>
                    <Box mx={1} className='container'>
                        <Typography variant="h6" color="inherit" className='cursor'>
                            • Entrar
                        </Typography>
                    </Box>
                    </Link>

                </Box>
            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
        {navbarComponent}
        </>
    )
}

export default Navbar;