import { useNavigate } from "react-router-dom"
import { Nav, Logo, ButtonsWrapper, NavButton } from "./style"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Nav>
      <Logo>🎸 Banda dos Sonhos</Logo>
      <ButtonsWrapper>
        <NavButton onClick={() => navigate("/login")}>Login</NavButton>
        <NavButton onClick={() => navigate("/home")}>Home</NavButton>
      </ButtonsWrapper>
    </Nav>
  )
}