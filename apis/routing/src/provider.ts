import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider } from '@pancakeswap/smart-router/evm'
import { createPublicClient, http } from 'viem'
import { bsc, bscTestnet, goerli, mainnet } from 'wagmi/chains'

const requireCheck = [ETH_NODE, PULSE_TESTNET_NODE, BSC_NODE, BSC_TESTNET_NODE]
requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const pulseTestnet = {
  id: 943,
  network: 'pulsechainV4',
  name: 'PulseChain V4',
  testnet: true,
  nativeCurrency: { name: 'V4 Pulse', symbol: 'v4PLS', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.v4.testnet.pulsechain.com'],
      webSocket: ['wss://ws.v4.testnet.pulsechain.com'],
    },
    public: {
      http: ['https://rpc.v4.testnet.pulsechain.com'],
      webSocket: ['wss://ws.v4.testnet.pulsechain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PulseScan',
      url: 'https://scan.v4.testnet.pulsechain.com',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    multicall3: {
      address: '0x4c5936F34BA40B40B461236d315992e6D118E042',
      blockCreated: 14353601,
    },
  },

} as const
const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(ETH_NODE),
})

const bscClient = createPublicClient({
  chain: bsc,
  transport: http(BSC_NODE),
})

const bscTestnetClient = createPublicClient({
  chain: bscTestnet,
  transport: http(BSC_TESTNET_NODE),
})

const pulseTestnetClient = createPublicClient({
  chain: pulseTestnet,
  transport: http(PULSE_TESTNET_NODE),
})

// @ts-ignore
export const viemProviders: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  switch (chainId) {
    // case ChainId.ETHEREUM:
    //   return mainnetClient
    // case ChainId.BSC:
    //   return bscClient
    // case ChainId.BSC_TESTNET:
    //   return bscTestnetClient
    case ChainId.PULSE_TESTNET:
      return pulseTestnetClient
    default:
      return pulseTestnetClient
  }
}
