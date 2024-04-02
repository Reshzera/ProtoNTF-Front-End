import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  padding: 16px 0px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  z-index: 2;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  gap: 16px;
  flex-wrap: wrap;
  padding: 0px 32px;

  @media (max-width: 425px) {
    padding: 0px 16px;
    > * {
      flex: 1;
    }
  }
`;

export const ProtoTokenLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg100};

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

export const ProtoTokenLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  label {
    color: ${({ theme }) => theme.colors.text100};
    cursor: pointer;
    margin-left: 8px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
  }
`;
