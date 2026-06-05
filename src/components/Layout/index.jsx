import { useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = () => {
  const [banda, setBanda] = useState({
    guitarrista: "",
    baixista: "",
    baterista: "",
    vocalista: "",
    convidado: "",
  })

  const [nomeUsuario, setNomeUsuario] = useState("")

  return (
    <>
      <Header />
      <Outlet context={{ banda, setBanda, nomeUsuario, setNomeUsuario }} />
      <Footer banda={banda} nomeUsuario={nomeUsuario} />
    </>
  )
}