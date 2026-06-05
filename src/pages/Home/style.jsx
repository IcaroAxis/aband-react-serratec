import styled from "styled-components"
import palco from "../../assets/palco.png"

export const Saudacao = styled.h2`
  color: #e94560;
  text-align: center;
  padding: 20px;
  background-color: #1a1a2e;
  margin: 0;
`

export const PalcoContainer = styled.div`
  min-height: calc(100vh - 120px);
  background-color: #1a1a2e;
`

export const PalcoFundo = styled.div`
  min-height: calc(100vh - 120px);
  background-image: url(${palco});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
`

export const Posicoes = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 20px;
  flex-wrap: wrap;
  gap: 12px;
`

export const Posicao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const Label = styled.span`
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 0 6px black;
  background: rgba(0,0,0,0.5);
  padding: 4px 8px;
  border-radius: 4px;
`

export const Select = styled.select`
  padding: 8px 12px;
  background: rgba(22, 33, 62, 0.9);
  color: white;
  border: 2px solid #e94560;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 160px;
`

export const InputCustom = styled.input`
  padding: 8px 12px;
  background: rgba(22, 33, 62, 0.9);
  color: white;
  border: 2px solid #e94560;
  border-radius: 6px;
  font-size: 0.9rem;
  min-width: 160px;
  outline: none;

  &::placeholder { color: #888; }
`