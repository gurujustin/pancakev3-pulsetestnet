import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider } from '@pancakeswap/smart-router/evm'
import { createPublicClient, http } from 'viem'
import { bsc, bscTestnet, goerli, mainnet } from 'wagmi/chains'

const requireCheck = [ETH_NODE, PULSE_MAINNET_NODE, BSC_NODE, BSC_TESTNET_NODE]
requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const pulseTestnet = {
  id: 369,
  network: 'pulsechain',
  name: 'PulseChain',
  testnet: false,
  nativeCurrency: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.pulsechain.com'],
      webSocket: ['wss://ws.pulsechain.com'],
    },
    public: {
      http: ['https://rpc.pulsechain.com'],
      webSocket: ['wss://ws.pulsechain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PulseScan',
      url: 'https://scan.pulsechain.com',
    },
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
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
  transport: http(PULSE_MAINNET_NODE),
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
    case ChainId.PULSE_MAINNET:
      return pulseTestnetClient
    default:
      return pulseTestnetClient
  }
}
