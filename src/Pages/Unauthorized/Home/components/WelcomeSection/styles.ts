import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const UpAndDown = keyframes`
  0% {
    transform: rotateZ(180deg);
  }
  25% {
    transform: translateY(-60%) rotateZ(180deg);
  }
  50% {
    transform: translateY(-60%) rotateZ(360deg);
  }
  75% {
    transform: translateY(0%) rotateZ(360deg);
  }
  100% {
    transform: rotateZ(180deg) translate(0%);
  }
`;

export const HomeWelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 64px;
  flex-wrap: wrap;
  gap: 32px;
  position: relative;
  flex: 1;
  min-height: calc(100vh - 70px);
  > svg {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.text100};
    animation: ${UpAndDown} 2s infinite ease;
    font-size: 32px;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    > svg {
      bottom: 0;
    }
  }
`;

export const HomeWelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  gap: 32px;
  flex: 1;
  > h1 {
    font-size: 70px;
    font-weight: 500;
    max-width: 100%;
    color: ${({ theme }) => theme.colors.text100};
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    width: 100%;
  }
  > p {
    font-size: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text100};
    line-height: 1.5;
    b {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary300};
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 480px) {
    > h1 {
      font-size: 60px;
    }
  }
`;

export const MintButton = styled(motion(Link))`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.text100};
  padding: 12px 24px;
  border-radius: 80px;
  color: ${({ theme }) => theme.colors.bg300};
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  cursor: pointer;
`;

export const HomeNumbersSection = styled(motion.div)`
  display: flex;
  margin-top: 64px;
`;

export const HomeNumberItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  gap: 8px;

  span {
    font-size: 40px;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text100};
  }

  label {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text200};
  }

  border-right: 1px solid ${({ theme }) => theme.colors.text200};
  &:last-child {
    border-right: none;
  }
`;

export const HomeNFTContainer = styled.div`
  display: flex;
  position: relative;
  max-height: calc(100vh - 70px);
  margin: -32px 0;
  overflow: hidden;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  gap: 32px;

  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 1290px) {
    margin: 0;
    min-width: 100%;
    max-height: 900px;
  }
`;
