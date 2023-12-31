import { ChainId, Token } from '@pancakeswap/sdk'
import { ethereumTokens, bscTokens, bscTestnetTokens, pulseTestnetTokens } from '@pancakeswap/tokens'

export const usdGasTokensByChain: { [chainId in ChainId]?: Token[] } = {
  [ChainId.ETHEREUM]: [ethereumTokens.usdt],
  [ChainId.PULSE_MAINNET]: [pulseTestnetTokens.usdc],
  [ChainId.BSC]: [bscTokens.busd],
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.busd],
}

export const nativeWrappedTokenByChain: { [chainId in ChainId]?: Token } = {
  [ChainId.ETHEREUM]: ethereumTokens.weth,
  [ChainId.PULSE_MAINNET]: pulseTestnetTokens.weth,
  [ChainId.BSC]: bscTokens.wbnb,
  [ChainId.BSC_TESTNET]: bscTestnetTokens.wbnb,
}

export * from './v2'
export * from './v3'
export * from './stableSwap'
