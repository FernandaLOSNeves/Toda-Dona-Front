import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material'
import {Link} from 'react-router-dom';
import './Navbar.css'


function Navbar() {
  return (
      <>
          <AppBar position="static" color='secondary'>
              <Toolbar className="backnav" variant="dense">
                  <Box className='cursor'>
                      <img src="https://imagizer.imageshack.com/v2/779x464q90/r/924/SUD0SM.png" alt="" />
                  </Box>

                  <Box display="flex" justifyContent="start">
                  <Link to='/home' className='text-decorator-none'>
                      <Box mx={1} className='cursor'>
                          <Typography variant="h6" color="inherit">
                              Home
                          </Typography>
                      </Box>
                      </Link>
                      <Link to='/contato' className='text-decorator-none'>
                      <Box mx={1} className='cursor'>
                          <Typography variant="h6" color="inherit">
                              Contato
                          </Typography>
                      </Box>
                      </Link>
                      <Link to='/login' className='text-decorator-none'>
                          <Box mx={1} className='cursor'>
                              <Typography variant="h6" color="inherit">
                                  Logout
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