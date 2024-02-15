import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-50%) translateY(100%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
  position: relative;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 999;
  animation: ${slideIn} 0.5s ease forwards, ${fadeOut} 0.5s ease 1.5s forwards;
`;