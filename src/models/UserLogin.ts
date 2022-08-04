interface UserLogin{
    id: number
    cpf: string
    senha: string
    token?: string | null
}

export default UserLogin