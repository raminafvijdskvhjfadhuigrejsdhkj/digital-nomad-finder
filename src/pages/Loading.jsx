import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.4;
    transform: scale(0.98);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0.4;
    transform: scale(0.98);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 54px;
  font-weight: 700;
  color: white;
  animation: ${pulse} 1.8s infinite;

  span {
    color: #adc6ff;
  }
`;

function Loading() {
  return (
    <Wrapper>
      <Text>
        Loading <span>destinations...</span>
      </Text>
    </Wrapper>
  );
}

export default Loading;