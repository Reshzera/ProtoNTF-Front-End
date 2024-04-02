import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { formatEther, parseEther } from "viem";
import { useReadContract } from "wagmi";
import { NTFContract } from "../../../../../services/wagmiConfig";
import {
  HomeNFTContainer,
  HomeNumberItem,
  HomeNumbersSection,
  HomeWelcomeContainer,
  HomeWelcomeSection,
  MintButton,
} from "./styles";
import NtfCarousel from "./components/NtfCarousel";
import { POKEMON_IMAGE_LIST } from "../../../../../constants/pokemonImageList";

// import { Container } from './styles';

const fadeInAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const WelcomeSection: React.FC = () => {
  const { data: winnersList } = useReadContract({
    ...NTFContract,
    functionName: "totalSupply",
  });

  const totalMarketCap = useMemo(() => {
    if (!winnersList) return formatEther(0n);
    const ntfprice = parseEther("0.01");
    const totalSupply = winnersList * ntfprice;
    return formatEther(totalSupply);
  }, [winnersList]);

  return (
    <HomeWelcomeContainer id="welcome">
      <HomeWelcomeSection>
        <motion.h1
          viewport={{ amount: 0.5 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Discover Exclussive
        </motion.h1>
        <motion.h1
          viewport={{ amount: 0.7 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Digital Collectibles
        </motion.h1>
        <motion.p
          viewport={{ amount: 0.7 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          This is a personal project to showcase my skills in web3 development.{" "}
          <br />
          It is a mint website for <b>Pokemons NFTs.</b>
          <br />
        </motion.p>
        <MintButton
          to="/mint"
          viewport={{ amount: 0.7 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Start Minting Now <IoArrowForward />
        </MintButton>
        <HomeNumbersSection
          viewport={{ amount: 0.7 }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          <HomeNumberItem>
            <span>120+</span>
            <label>Unique Pokemons</label>
          </HomeNumberItem>
          <HomeNumberItem>
            <span>{Number(winnersList ?? 0)}</span>
            <label>Already minted</label>
          </HomeNumberItem>
          <HomeNumberItem>
            <span>{totalMarketCap} ETH</span>
            <label>Total market cap</label>
          </HomeNumberItem>
        </HomeNumbersSection>
      </HomeWelcomeSection>
      <HomeNFTContainer>
        <NtfCarousel imgaes={POKEMON_IMAGE_LIST.slice(0, 10)} />
        <NtfCarousel imgaes={POKEMON_IMAGE_LIST.slice(10, 20)} down />
        <NtfCarousel imgaes={POKEMON_IMAGE_LIST.slice(20, 30)} />
      </HomeNFTContainer>

      <IoIosArrowDropdown />
    </HomeWelcomeContainer>
  );
};

export default WelcomeSection;
