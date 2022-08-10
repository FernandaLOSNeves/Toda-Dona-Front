import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid, Button } from '@material-ui/core'
import {Box} from '@mui/material'
import './Footer.css'

function Footer() {
  return (
    <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2022 Copyright: TodaDona Inc.</Typography>
                        </Box>
                        <Box>                            
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">https://todadona.com.br</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>
)
}
export default Footer;