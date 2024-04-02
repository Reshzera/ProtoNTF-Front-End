import React from "react";
import {
  LiaConnectdevelop,
  LiaEthereum,
  LiaRocketSolid,
  LiaUserCheckSolid,
  LiaWalletSolid,
} from "react-icons/lia";
import {
  HomeHowItWorkStep,
  HomeHowItWorksContainer,
  HomeHowItWorksContent,
  HomeHowItWorksTitle,
} from "./styles";
import ButtonMetaMask from "../../../../../components/ButtonMetaMask";

// import { Container } from './styles';
const fadeInAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HowItWorksSection: React.FC = () => {
  return (
    <HomeHowItWorksContainer id="how-it-works">
      <HomeHowItWorksTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInAnimation}
      >
        How it works
      </HomeHowItWorksTitle>
      <HomeHowItWorksContent
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={containerVariants}
      >
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaWalletSolid />

          <h1>Create a Metamask Wallet</h1>
          <p>
            Metamask is an essential tool for navigating the decentralized web,
            acting as a secure gateway to the Ethereum blockchain and its vast
            ecosystem of Dapps. To participate in our Pokémon NFT minting site,
            a Metamask wallet is indispensable. Setting up Metamask not only
            allows you to mint and collect unique Pokémon NFTs but also immerses
            you in the broader world of decentralized applications. Start your
            adventure into the NFT universe by creating a Metamask wallet today.
            With it, you'll be able to explore, mint, and trade Pokémon NFTs,
            adding a new dimension to your collection and interaction with the
            Pokémon universe on the blockchain.
          </p>
        </HomeHowItWorkStep>

        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaConnectdevelop />

          <h1>Connect the Metamask Wallet</h1>
          <p>
            Connecting your Metamask wallet is the first step towards engaging
            with the dynamic and decentralized world of Ethereum-based
            applications. By linking Metamask to our platform, you unlock the
            ability to seamlessly mint and collect unique Pokémon NFTs,
            alongside a myriad of other decentralized services and games.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaEthereum />

          <h1>Mint a Pokemon</h1>
          <p>
            Following the connection of your Metamask wallet, the next step
            involves minting unique Pokémon NFTs on the Sepolia Network at a
            fixed price of 0.01 ETH. This pivotal action enables you to actively
            engage in the creation and collection of Pokémon NFTs within the
            blockchain ecosystem. The minting price is standardized at 0.01 ETH,
            designed to be accessible while also reflecting the value of these
            digital collectibles. This process is streamlined and user-friendly,
            ensuring a smooth transition into the world of NFTs without the need
            for complex transactions or large initial investments.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaRocketSolid />

          <h1>Opensea Testnet Marketplace</h1>
          <p>
            Once your Pokémon NFTs are minted, the vibrant marketplace of
            OpenSea's testnet awaits you. This platform allows you to list and
            sell your unique Pokémon NFTs to other collectors and enthusiasts in
            a decentralized environment, specifically within a test network
            setting. This offers not just an opportunity to showcase your
            collection but also the potential to earn rewards, all while
            experiencing the functionalities of OpenSea in a risk-free
            environment. Selling on OpenSea's testnet transcends traditional
            trading, leveraging blockchain technology to ensure fairness,
            transparency, and secure transactions in real-time. Remember, since
            this occurs on a test network, it's an excellent way to familiarize
            yourself with NFT trading without financial investment.
          </p>
        </HomeHowItWorkStep>
        <HomeHowItWorkStep variants={fadeInAnimation}>
          <LiaUserCheckSolid />
          <h1>Try it Now</h1>
          <p>
            Ready to dive into the world of NFT collecting and blockchain-based
            trading? Just click the button below, allow us to connect to your
            Metamask wallet, and start minting and selling Pokémon NFTs on
            OpenSea's testnet. This process is straightforward yet exciting,
            offering a unique opportunity to experience the power of blockchain
            technology in a creative and engaging manner. Join us today and
            explore the vast potential of decentralized applications and NFT
            trading without the need for actual financial investment, all within
            a risk-free test network environment.
          </p>
          <ButtonMetaMask
            styles={{
              marginTop: "16px",
            }}
          />
        </HomeHowItWorkStep>
      </HomeHowItWorksContent>
    </HomeHowItWorksContainer>
  );
};

export default HowItWorksSection;
