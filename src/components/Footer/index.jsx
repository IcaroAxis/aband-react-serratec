import { FooterContainer, BandaInfo, Membro } from "./style"

export const Footer = ({ banda, nomeUsuario }) => {
  const labels = {
    guitarrista: "🎸 Guitarrista",
    baixista:    "🎵 Baixista",
    baterista:   "🥁 Baterista",
    vocalista:   "🎤 Vocalista",
    convidado:   "⭐ Convidado",
  }

  return (
    <FooterContainer>
      <p>🎶 A banda de {nomeUsuario || "visitante"} é:</p>
      <BandaInfo>
        {Object.entries(labels).map(([key, label]) => (
          <Membro key={key}>
            {label}: <strong>{banda[key] || "Ninguém ainda"}</strong>
          </Membro>
        ))}
      </BandaInfo>
    </FooterContainer>
  )
}