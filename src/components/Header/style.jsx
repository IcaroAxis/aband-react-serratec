import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  background-color: #16213e;
  border-bottom: 2px solid #e94560;
`

export const Logo = styled.h2`
  color: #e94560;
  font-size: 1.4rem;
  margin: 0;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`

export const NavButton = styled.button`
  padding: 8px 20px;
  background: transparent;
  color: white;
  border: 2px solid #e94560;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:hover {
    background-color: #e94560;
  }
`