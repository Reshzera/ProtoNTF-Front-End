import React, { useCallback, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";
import { toast } from "react-toastify";
import { parseEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import ButtonMetaMask from "../../../components/ButtonMetaMask";
import { NTFContract } from "../../../services/wagmiConfig";
import {
  MintButton,
  MintCard,
  MintCardInfo,
  MintCardInfoTitle,
  MintContainer,
  NTFQuantityInput,
  NTFQuantitySection,
  RedirectMintLinks,
  RedirectSection,
  TotalPriceSection,
} from "./styles";

// import { Container } from './styles';

const Mint: React.FC = () => {
  const { address } = useAccount();
  const { data: hash, writeContractAsync: mintNTF } = useWriteContract();
  const [quantity, setQuantity] = useState<number>(1);

  const handleMint = useCallback(() => {
    const value = quantity * 0.01;
    const parsedValue = parseEther(value.toString());
    toast.promise(
      mintNTF({
        ...NTFContract,
        functionName: "mint",
        value: parsedValue,
        args: [BigInt(quantity)],
      }),
      {
        pending: "Waiting for Confirmation",
        success: "Transaction sent to the blockchain",
        error: "Transaction rejected by user",
      }
    );
  }, [quantity, mintNTF]);

  return (
    <MintContainer>
      <h1>Pokemon NTF</h1>
      <MintCard>
        <h1>Limited Edition</h1>
        <MintCardInfo>
          <img src="/images/2.png" alt="pokemon" />
          <MintCardInfoTitle>
            <label>Price per NFT</label>
            <span>0.01 ETH each</span>
          </MintCardInfoTitle>
        </MintCardInfo>
        <NTFQuantitySection>
          <NTFQuantityInput>
            <BiMinus
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            />
            <span>{quantity}</span>
            <BiPlus
              onClick={() => setQuantity((prev) => (prev >= 5 ? 5 : prev + 1))}
            />
          </NTFQuantityInput>
          <span>5 Max</span>
        </NTFQuantitySection>
        <TotalPriceSection>
          <label>Total Price</label>
          <span>{quantity * 0.01} ETH</span>
        </TotalPriceSection>
        {!address && (
          <ButtonMetaMask
            styles={{
              marginTop: "auto",
            }}
          />
        )}
        {address && (
          <MintButton
            onClick={() => {
              handleMint();
            }}
          >
            MINT NOW
          </MintButton>
        )}
      </MintCard>
      <RedirectSection>
        {!!hash && (
          <RedirectMintLinks
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaEthereum />
            See the transaction on Etherscan
          </RedirectMintLinks>
        )}
        {!!address && (
          <RedirectMintLinks
            href={`${import.meta.env.VITE_OPENSEA_URL}/${address}?search[query]=Proto%20NTF`}
            target="_blank"
            rel="noreferrer"
          >
            <SiOpensea />
            See your ProtoNTF on OpenSea
          </RedirectMintLinks>
        )}
      </RedirectSection>
    </MintContainer>
  );
};

export default Mint;
