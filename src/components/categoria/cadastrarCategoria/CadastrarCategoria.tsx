import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'
import { buscaId, post, put } from '../../../services/Service'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Categoria from '../../../models/Categoria'

function CadastrarCategoria() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [token, setToken] = useLocalStorage('token')
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: ''
  })

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logada')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token
      }
    })
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('categoria ' + JSON.stringify(categoria))

    if (id !== undefined) {
      console.log(categoria)
      put(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token
        }
      })
      alert('Categoria atualizada com sucesso')
    } else {
      post(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token
        }
      })
      alert('Categoria cadastrada com sucesso')
    }
    back()
  }

  function back() {
    navigate('/categorias')
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro categoria
        </Typography>
        <TextField
          value={categoria.categoria}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="categoria"
          label="categoria"
          variant="outlined"
          name="categoria"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastrarCategoria
