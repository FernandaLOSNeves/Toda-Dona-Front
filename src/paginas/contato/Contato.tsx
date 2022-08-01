import { Grid } from '@material-ui/core';
import React from 'react'
// import { Typography, Grid, Button } from '@material-ui/core'
// import Box from '@mui/material'
import './Contato.css'

function Contato() {
  return (
    <>
      <Grid container xs={12}>
          <Grid item xs={8}>
            <h1>texto</h1>
          </Grid>

          <Grid item xs={4}>
              <h1>texto2</h1>
          </Grid>
      </Grid>
    </>
)
}
export default Contato;