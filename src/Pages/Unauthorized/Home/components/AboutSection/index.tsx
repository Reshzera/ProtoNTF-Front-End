import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  HomeAboutCard,
  HomeAboutContainer,
  HomeAboutContent,
  HomeAboutContentCodeSection,
  HomeAboutListCard,
  HomeAboutTitle,
} from "./styles";

// import { Container } from './styles';
const fadeInAnimationTop = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const fadeInAnimationLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const ContractCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "erc721a/contracts/ERC721A.sol";

contract ProtoNTF is ERC721A {
    address payable private _owner;

    constructor() ERC721A("ProtoNTF", "PNTF") {
        _owner = payable(msg.sender);
    }

    function mint(uint256 quantity) public payable {
        require(msg.value == quantity * 0.01 ether, "Invalid amount");
        _mint(msg.sender, quantity);
    }

    function burn(uint256 tokenId) public {
        super._burn(tokenId);
    }

    function withdraw() public {
        require(msg.sender == _owner, "Only owner can withdraw");
        uint256 balance = address(this).balance;
        (bool success, ) = _owner.call{value: balance}("");
        require(success, "Transfer failed.");
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRLwwfSyPYga8BvamLM1sT2W8R9JxLDZQWJy6ZqRh5RUB/";
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721A) returns (string memory) {
        return string.concat(super.tokenURI(tokenId), ".json");
    }
}
`;

const AboutSection: React.FC = () => {
  return (
    <HomeAboutContainer id="about">
      <HomeAboutTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5, delay: 1 }}
        variants={fadeInAnimationTop}
      >
        About the project
      </HomeAboutTitle>
      <HomeAboutContent>
        <HomeAboutContentCodeSection
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={fadeInAnimationLeft}
        >
          <h1>Smart Contract Code</h1>
          <SyntaxHighlighter language="solidity" style={a11yDark}>
            {ContractCode}
          </SyntaxHighlighter>
        </HomeAboutContentCodeSection>
        <HomeAboutListCard
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={containerVariants}
        >
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Objective of the project</h1>
            <p>
              The project was launched to enhance our comprehension of the
              Ethereum blockchain and smart contracts, focusing on the
              innovative realm of NFT creation and trading. By developing a
              platform for minting unique Pokémon NFTs, we delve into the
              practical applications of smart contracts and their integral role
              within the blockchain ecosystem. This shift towards NFT minting
              and trading on OpenSea's testnet exemplifies the hands-on use of
              blockchain technology, offering a creative and engaging way to
              interact with digital assets. Participants are invited to engage
              in this immersive experience, creating, collecting, and trading
              digital Pokémon collectibles, with smart contracts providing the
              foundation for secure, transparent, and efficient transactions.
            </p>
          </HomeAboutCard>
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Technologies used</h1>
            <p>
              The project was developed using the Sepolia blockchain and
              Solidity for the smart contract. To create the Solidity smart
              contract, was used the Hardhat framework to compile, deploy and
              test the contract. The Smart Contract was deployed on the Sepolia
              Testnet and you can check the contract on the Sepolia Etherscan.
            </p>
          </HomeAboutCard>
          <HomeAboutCard variants={fadeInAnimationLeft}>
            <h1>Created by</h1>
            <p>
              The project was created by Rafael Eitaro Oshiro a software
              engineer with a passion for blockchain and decentralized
              applications. The project was created to learn more about the
              Ethereum blockchain and smart contracts. If you want to know more
              about the project or contact the creator, you can check the GitHub
              repository or send an email.
            </p>
          </HomeAboutCard>
        </HomeAboutListCard>
      </HomeAboutContent>
    </HomeAboutContainer>
  );
};

export default AboutSection;
