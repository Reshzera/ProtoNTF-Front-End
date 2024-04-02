import styled from "styled-components";

export const UnauthorizedLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: radial-gradient(
      circle,
      rgba(84, 2, 2, 1) 0%,
      rgba(48, 0, 0, 1) 25%,
      rgba(88, 2, 2, 1) 50%,
      rgba(48, 0, 0, 1) 75%,
      rgba(86, 2, 2, 1) 100%
    );
    filter: blur(80px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const UnauthorizedLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 100%;
  min-width: 100%;
`;
