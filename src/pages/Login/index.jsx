import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Title, Input, Button, Subtitle } from "./style"

export function Login() {
  const [nome, setNome] = useState("")
  const navigate = useNavigate()

  function handleConfirmar() {
    if (nome.trim() === "") return
    localStorage.setItem("nomeUsuario", nome)
    navigate("/home")
  }

  return (
    <Container>
      <Title>🎸 Monte sua Banda dos Sonhos</Title>
      <Input
        type="text"
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button onClick={handleConfirmar}>Entrar</Button>
    </Container>
  )
}