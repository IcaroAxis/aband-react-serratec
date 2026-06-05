import styled from "styled-components"
import palcologin from "../../assets/palcologin.avif"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${palcologin});
  background-size: cover;
  background-position: center;
  gap: 16px;
`

export const Title = styled.h1`
  color: #f5f0e6;
  -webkit-text-stroke: 2px #e94560;
  font-size: 4.5rem;
  text-align: center;
  margin-top: -280px;
`

export const Subtitle = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  margin-bottom: 10px;
`

export const Input = styled.input`
  padding: 12px 20px;
  width: 300px;
  border-radius: 8px;
  border: 2px solid #e94560;
  background: #16213e;
  color: white;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #888;
  }
`

export const Button = styled.button`
  padding: 12px 40px;
  background-color: #e94560;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #c73652;
  }
`
