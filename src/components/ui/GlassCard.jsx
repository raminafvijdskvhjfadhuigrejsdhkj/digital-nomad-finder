import styled from "styled-components";

const GlassCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  backdrop-filter: blur(20px);
  padding: 24px;
  
`;

export default GlassCard;