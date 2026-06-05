import { CardContainer, Foto, Nome, Instrumento } from "./style"

export function Card({ nome, foto, instrumento }) {
  return (
    <CardContainer>
      <Foto src={foto} alt={nome} />
      <Nome>{nome}</Nome>
      <Instrumento>{instrumento}</Instrumento>
    </CardContainer>
  )
}