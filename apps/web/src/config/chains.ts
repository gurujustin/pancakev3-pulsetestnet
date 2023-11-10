import { ChainId } from '@pancakeswap/sdk'
import memoize from 'lodash/memoize'
import invert from 'lodash/invert'
import { bsc, bscTestnet, goerli, mainnet } from 'wagmi/chains'

export const CHAIN_QUERY_NAME = {
  [ChainId.ETHEREUM]: 'eth',
  [ChainId.PULSE_MAINNET]: 'pulsechain',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bscTestnet',
} as const satisfies Record<ChainId, string>

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

const CHAIN_QUERY_NAME_TO_ID = invert(CHAIN_QUERY_NAME)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName] ? +CHAIN_QUERY_NAME_TO_ID[chainName] : undefined
})

export const CHAINS = [goerli, pulseTestnet]
