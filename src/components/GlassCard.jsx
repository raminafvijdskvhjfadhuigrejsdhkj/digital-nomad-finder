import styled from "styled-components";

const GlassCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  backdrop-filter: blur(20px);
  padding: 24px;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.cardHover};
    border-color: ${({ theme }) => theme.borderBright};
    box-shadow: 0 20px 50px rgba(173, 198, 255, 0.08);
  }
`;

export default GlassCard;