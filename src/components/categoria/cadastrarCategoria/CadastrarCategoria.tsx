import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'
import { buscaId, post, put } from '../../../services/Service'
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { Bounce, toast } from 'react-toastify'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastrarCategoria() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: ''
  })

  useEffect(() => {
    if (token == '') {
      toast.error("Você precisa estar logada", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
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
      toast.success('Categoria atualizada com sucesso', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
     else {
      post(`/categoria`, categoria, setCategoria, {
        headers: {
          Authorization: token
        }
      })
      toast.success('Categoria cadastrada com sucesso', {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
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
