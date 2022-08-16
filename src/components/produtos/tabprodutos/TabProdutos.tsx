import React, { useState } from 'react'
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { TabContext, TabPanel } from '@material-ui/lab'
import ListaProdutosHome from '../listaprodutos/ListaProdutosHome'


function TabProdutos() {
  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ListaProdutosHome />
      </Box>
    </>
  )
}
export default TabProdutos
