import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Box
} from '@mui/material'
import './CadastroProduto.css'
import { useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId, post, put } from '../../../services/Service'
import Categoria from '../../../models/Categoria'
import Produto from '../../../models/Produto'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'

function CadastroProduto() {
  let navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logada', {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      navigate('/login')
    }
  }, [token])

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    categoria: ''
  })
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome_produto: '',
    valor_produto: 0,
    descricao_produto: '',
    fotoProduto: '',
    categorias: null
  })

  useEffect(() => {
    setProduto({
      ...produto,
      categorias: categoria
    })
  }, [categoria])

  useEffect(() => {
    getCategorias()
    if (id !== undefined) {
      findByIdProduto(id)
    }
  }, [id])

  async function getCategorias() {
    await busca('/categoria', setCategorias, {
      headers: {
        Authorization: token
      }
    })
  }

  async function findByIdProduto(id: string) {
    await buscaId(`produto/${id}`, setProduto, {
      headers: {
        Authorization: token
      }
    })
  }

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categorias: categoria
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      put(`/produto`, produto, setProduto, {
        headers: {
          Authorization: token
        }
      })
      toast.success('Produto atualizado com sucesso', {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      console.log(produto)
      post(`/produto`, produto, setProduto, {
        headers: {
          Authorization: token
        }
      })
      toast.success('Produto cadastrado com sucesso', {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    back()
  }

  function back() {
    navigate('/produtos')
  }

  return (
    <Container maxWidth="sm"  >
      <Box className='cardcadastrarproduto'>
      <form onSubmit={onSubmit}>
        <Typography
          className='textocor'
          variant="h3"
          component="h1"
          align="center"
        >
          Formulário de cadastro produto
        </Typography>
        <TextField
          className='campocadastrarproduto'
          value={produto.nome_produto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="nome_produto"
          label="Nome do produto"
          variant="outlined"
          name="nome_produto"
          margin="normal"
          fullWidth
        />

        <TextField
          className='campocadastrarproduto'
          value={produto.valor_produto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="valor_produto"
          label="Valor do produto"
          variant="outlined"
          name="valor_produto"
          margin="normal"
          fullWidth
        />

        <TextField
          className='campocadastrarproduto'
          value={produto.descricao_produto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="descricao_produto"
          label="Descrição do produto"
          name="descricao_produto"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          className='campocadastrarproduto'
          value={produto.fotoProduto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
          id="fotoProduto"
          label="Foto do produto"
          name="fotoProduto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">
            Categoria{' '}
          </InputLabel>
          <Select
          className='campocadastrarproduto margintop'
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={e =>
              buscaId(`/categoria/${e.target.value}`, setCategoria, {
                headers: {
                  Authorization: token
                }
              })
            }
          >
            {categorias.map(categoria => (
              <MenuItem  value={categoria.id}>{categoria.categoria}</MenuItem>
            ))}
          </Select>
          <FormHelperText className='textocor'>Escolha a categoria do produto</FormHelperText>
          <Button type="submit" variant="contained" className='btncadastrarproduto'>
            Finalizar
          </Button>
        </FormControl>
      </form>
      </Box>
    </Container>
  )
}
export default CadastroProduto
