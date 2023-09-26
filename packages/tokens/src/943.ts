import { ChainId, ERC20Token, WETH9, WBNB } from '@pancakeswap/sdk'

import { USDC_PULSE_TESTNET } from './common'

export const goerliTestnetTokens = {
  weth: WETH9[ChainId.PULSE_TESTNET],
  wbnb: WBNB[ChainId.PULSE_TESTNET],
  usdc: USDC_PULSE_TESTNET,
  usdt: new ERC20Token(ChainId.PULSE_TESTNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'Tether USD', 'USDT'),
}
