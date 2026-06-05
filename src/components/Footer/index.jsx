import { FooterContainer, BandaInfo, Membro } from "./style"

export const Footer = () => {
  const bandaSalva = JSON.parse(localStorage.getItem("banda") || "{}")
  const nomeUsuario = localStorage.getItem("nomeUsuario")

  const labels = {
    guitarrista: "🎸 Guitarrista",
    baixista:    "🎵 Baixista",
    baterista:   "🥁 Baterista",
    vocalista:   "🎤 Vocalista",
    convidado:   "⭐ Convidado",
  }

  return (
    <FooterContainer>
      <p>🎶 A banda de {nomeUsuario} é:</p>
      <BandaInfo>
        {Object.entries(labels).map(([key, label]) => (
          <Membro key={key}>
            {label}: <strong>{bandaSalva[key] || "Ninguém ainda"}</strong>
          </Membro>
        ))}
      </BandaInfo>
    </FooterContainer>
  )
}