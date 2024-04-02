# ProtoNFT Dapp

Welcome to the ProtoNFT Dapp repository. This React application, crafted with TypeScript and built with Vite, integrates with the Sepolia Ethereum testnet to offer a decentralized app for minting Pokemon-themed NFTs. Our implementation utilizes state-of-the-art web technologies and Wagmi hooks for seamless Web3 integration, providing an educational platform for learning about blockchain and NFT technology. Check out this project live: [ProtoNFT Dapp](https://proto-ntf-front-end.vercel.app/)

## Project Structure

Below is the structure of the project detailing important directories and files:

```plaintext
FRONT
├── public              # Static files
├── src                 # Source files for the React application
│   ├── ABI             # Application Binary Interface for smart contracts
│   ├── components      # React components
│   ├── hooks           # Custom React hooks
│   ├── layouts         # Layout components for page structure
│   ├── pages           # Page components, including the NFT minting page
│   ├── services        # Service files for handling backend communication
│   ├── styles          # Style files, typically CSS or similar
│   ├── types           # TypeScript type definitions
│   ├── utils           # Utility functions
│   ├── App.tsx         # Main React component that starts your app
│   ├── main.tsx        # Entry point for the application logic
│   ├── routes.tsx      # Routing definitions for the app
│   ├── styled-components.d.ts # Styled-components type definitions
│   └── vite-env.d.ts   # Type definitions for Vite
├── .env                # Environment variables (NOT to be committed)
├── index.html          # Entry point for the application
```

## Quick Start

1. **Install dependencies**

```bash
yarn
```

2. **Run the development server**

```bash
yarn dev
```

3. **Build the project**

```bash
yarn build
```

4. **Lint the project**

```bash
yarn lint
```

5. **Preview the production build**

```bash
yarn preview
```

## Technologies

- **React & TypeScript**: For a type-safe and maintainable codebase.
- **Vite**: For fast development and build workflow.
- **Wagmi & Viem**: To interact with Ethereum wallets and smart contracts on the Sepolia testnet.

## Web3 Integration

The project connects to the Sepolia Ethereum testnet using Wagmi hooks, which abstracts the connection to the blockchain and provides a set of tools for developing Ethereum applications. Participants can connect their MetaMask wallets to interact with the smart contract designed for minting and managing Pokemon-themed NFTs the contract address is:

[Smart Contract on Etherscan](https://sepolia.etherscan.io/address/0x09ba7e23ccf63f2437d36c49199b9a7df3adccdc#code)

## License

This project is open source and available under the [MIT License](LICENSE).

---

_Note: This project is for educational and demonstration purposes only. It emphasizes Web3, Wagmi, and Viem to showcase the capabilities of Ethereum blockchain interaction in the context of NFT minting and management._
