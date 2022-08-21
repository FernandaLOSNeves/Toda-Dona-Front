import React, { useState } from 'react'
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { TabContext, TabPanel } from '@material-ui/lab'
import ListaProdutos from '../listaprodutos/ListaProdutos'


function TabProdutos() {
  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ListaProdutos/>
      </Box>
    </>
  )
}
export default TabProdutos
  