import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: BSC_NODE,
    skipFetchSetup: true,
  },
  56,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: BSC_TESTNET_NODE,
    skipFetchSetup: true,
  },
  97,
)

export const pulseTestnetProvider = new StaticJsonRpcProvider(
  {
    url: PULSE_TESTNET_NODE,
    skipFetchSetup: true,
  },
  943,
)

export const ethProvider = new StaticJsonRpcProvider(
  {
    url: ETH_NODE,
    skipFetchSetup: true,
  },
  1,
)
