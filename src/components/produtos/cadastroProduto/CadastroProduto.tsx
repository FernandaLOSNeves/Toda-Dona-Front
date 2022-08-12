import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@mui/material";
import "./CadastroProduto.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { busca, buscaId, post, put } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";

function CadastroProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [token, setToken] = useLocalStorage("token");

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logada");
            navigate("/login");
        }
    }, [token]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        categoria: "",
    });
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome_produto: '',
        valor_produto: 0,
        descricao_produto: '',
        categorias: null
    });

    useEffect(() => {
        setProduto({
            ...produto,
            categorias: categoria,
        });
    }, [categoria]);

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            findByIdProduto(id);
        }
    }, [id]);

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findByIdProduto(id: string) {
        await buscaId(`/produto/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categorias: categoria,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Produto atualizado com sucesso");
        } else {
            console.log(produto)
            post(`/produto`, produto, setProduto, {
                headers: {
                    Authorization: token,
                },
            });
            alert("Produto cadastrada com sucesso");
        }
        back();
    }

    function back() {
        navigate("/produtos");
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
                    Formulário de cadastro produto
                </Typography>
                <TextField
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
                    value={produto.descricao_produto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="descricao_produto"
                    label="Descrição do produto"
                    name="descricao_produto"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                    <FormControl>
                    <InputLabel id="demo-simple-select-helper-label"> Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) =>
                            buscaId(`/categoria/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token,
                                },
                            })
                        }
                    >
                        {categorias.map((categoria) => (
                            <MenuItem value={categoria.id}>{categoria.categoria}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Escolha a categoria do produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}
export default CadastroProduto;