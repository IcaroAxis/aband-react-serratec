import { useState } from "react"
import { useOutletContext } from "react-router-dom"
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
  const { banda, setBanda, nomeUsuario } = useOutletContext()

  const [modoCustom, setModoCustom] = useState({
    guitarrista: false,
    baixista: false,
    baterista: false,
    vocalista: false,
    convidado: false,
  })

  function handleChange(categoria, valor) {
    if (valor === "__custom__") {
      setModoCustom((prev) => ({ ...prev, [categoria]: true }))
      setBanda((prev) => ({ ...prev, [categoria]: "" }))
    } else {
      setModoCustom((prev) => ({ ...prev, [categoria]: false }))
      setBanda((prev) => ({ ...prev, [categoria]: valor }))
    }
  }

  function handleCustomInput(categoria, valor) {
    setBanda((prev) => ({ ...prev, [categoria]: valor }))
  }

  return (
    <PalcoContainer>
      <Saudacao>Bem-vindo, {nomeUsuario || "visitante"}! Monte sua banda dos sonhos 🎸</Saudacao>
      <PalcoFundo>
        <Posicoes>
          {categorias.map(({ key, label }) => {
            const opcoes = dados.filter((m) => m.categoria === key)
            const musicoSelecionado = dados.find((m) => m.nome === banda[key])

            return (
              <Posicao key={key}>
                <Label>{label}</Label>

                <Select
                  value={modoCustom[key] ? "__custom__" : banda[key]}
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

                {modoCustom[key] && (
                  <InputCustom
                    type="text"
                    placeholder="Nome do músico..."
                    value={banda[key]}
                    onChange={(e) => handleCustomInput(key, e.target.value)}
                  />
                )}

                {!modoCustom[key] && musicoSelecionado && (
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