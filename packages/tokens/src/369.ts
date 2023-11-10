import { ChainId, ERC20Token, WETH9, WBNB } from '@pancakeswap/sdk'

import { USDC_PULSE_MAINNET } from './common'

export const pulseTestnetTokens = {
  weth: WETH9[ChainId.PULSE_MAINNET],
  wbnb: WBNB[ChainId.PULSE_MAINNET],
  usdc: USDC_PULSE_MAINNET,
  usdt: new ERC20Token(ChainId.PULSE_MAINNET, '0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f', 6, 'USDT', 'Tether USD'),
}
