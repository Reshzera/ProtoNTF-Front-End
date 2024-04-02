import styled from "styled-components";

export const MintContainer = styled.div`
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  align-items: center;
  user-select: none;

  > h1 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text100};
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const MintCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${({ theme }) => theme.colors.primary100};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary300};

  width: 100%;
  max-width: 400px;
  min-height: 400px;

  padding: 24px;

  > h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.text100};
    font-weight: 600;
  }

  > a {
    display: flex;
    justify-content: center;
    gap: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text100};
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;

    &:visited {
      color: ${({ theme }) => theme.colors.text100};
    }
  }
`;

export const MintCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  border-radius: 8px;
  padding: 8px;
  width: 100%;

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary200};
    padding: 8px;
  }
`;

export const MintCardInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text100};
  }
  label {
    font-size: 12px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text100};
  }
`;

export const NTFQuantitySection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary200};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  padding: 8px;

  > span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text100};
  }
`;

export const NTFQuantityInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text100};
    user-select: none;
  }

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text100};
  }
`;

export const TotalPriceSection = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary300};
  padding: 12px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
  justify-content: space-between;

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text100};
  }
  label {
    font-size: 12px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text100};
  }
`;

export const MintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  gap: 8px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.text100};
  padding: 12px 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.bg300};
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RedirectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-top: 32px;
  max-width: 400px;
`;

export const RedirectMintLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.text100};
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.bg300};
  font-size: 14px;
  font-weight: 500;

  svg {
    color: #2d81e2;
    font-size: 32px;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.bg300};
  }
`;
