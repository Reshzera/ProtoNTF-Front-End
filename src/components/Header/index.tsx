import React from "react";
import {
  HeaderContainer,
  HeaderContentWrapper,
  ProtoTokenLogo,
  ProtoTokenLogoContainer,
} from "./styles";
import ButtonMetaMask from "../ButtonMetaMask";
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <ProtoTokenLogoContainer to={"/"}>
          <ProtoTokenLogo>
            <img
              src="https://seeklogo.com/images/U/ultraball-pokemon-logo-35E5B2B3B5-seeklogo.com.png"
              alt="Google"
            />
          </ProtoTokenLogo>
          <label>Pokemon NFT</label>
        </ProtoTokenLogoContainer>
        <ButtonMetaMask />
      </HeaderContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
