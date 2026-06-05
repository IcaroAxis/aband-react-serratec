import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: #16213e;
  border-top: 2px solid #e94560;
  padding: 16px 40px;
  color: #ccc;
  font-size: 0.9rem;

  p {
    margin: 0 0 8px;
    color: #e94560;
    font-weight: bold;
  }
`

export const BandaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Membro = styled.span`
  color: #aaa;

  strong {
    color: white;
  }
`