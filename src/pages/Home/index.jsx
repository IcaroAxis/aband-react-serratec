import { useState, useEffect } from "react"
import { dados } from "../../data/dados"
import { Card } from "../../components/CardMusico"
import {
  PalcoContainer, PalcoFundo, Posicoes, Posicao,
  Label, Select, InputCustom, Saudacao
} from "./style"

const categorias = [
  { key: "guitarrista", label: "🎸 Guitarrista" },
  { key: "baixista",    label: "🎵 Baixista" },
  { key: "baterista",   label: "🥁 Baterista" },
  { key: "vocalista",   label: "🎤 Vocalista" },
  { key: "convidado",   label: "⭐ Convidado Especial" },
]

export function Home() {
  const [banda, setBanda] = useState({
    guitarrista: "",
    baixista: "",
    baterista: "",
    vocalista: "",
    convidado: "",
  })
  
  

  const nomeUsuario = localStorage.getItem("nomeUsuario")

  useEffect(() => {
    localStorage.setItem("banda", JSON.stringify(banda))
  }, [banda])

  function handleChange(categoria, valor) {
    setBanda((prev) => ({ ...prev, [categoria]: valor }))
  }

  return (
    <PalcoContainer>
      <Saudacao>Bem-vindo {nomeUsuario}! Monte sua banda dos sonhos 🎸</Saudacao>
      <PalcoFundo>
        <Posicoes>
          {categorias.map(({ key, label }) => {
            const opcoes = dados.filter((m) => m.categoria === key)
            const musicoSelecionado = dados.find((m) => m.nome === banda[key])

            return (
              <Posicao key={key}>
                <Label>{label}</Label>

                <Select
                  value={banda[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                >
                  <option value="">-- Escolher --</option>
                  {opcoes.map((m) => (
                    <option key={m.id} value={m.nome}>
                      {m.nome}
                    </option>
                  ))}
                  <option value="__custom__">✏️ Digitar nome...</option>
                </Select>

                {banda[key] === "__custom__" && (
                  <InputCustom
                    type="text"
                    placeholder="Nome do músico..."
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                )}

                {musicoSelecionado && (
                  <Card
                    nome={musicoSelecionado.nome}
                    foto={musicoSelecionado.foto}
                    instrumento={musicoSelecionado.instrumento}
                  />
                )}
              </Posicao>
            )
          })}
        </Posicoes>
      </PalcoFundo>
    </PalcoContainer>
  )
}