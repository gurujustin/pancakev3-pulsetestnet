import { ChainId } from '@pancakeswap/sdk'
import { FarmConfigV3 } from '../../src/types'
import { farmsV3 as farm1 } from '../1'
import { farmsV3 as farm5 } from '../369'
import { farmsV3 as farm56 } from '../56'
import { farmsV3 as farm97 } from '../97'

export const farmsV3ConfigChainMap: Record<ChainId, FarmConfigV3[]> = {
  [ChainId.ETHEREUM]: farm1,
  [ChainId.PULSE_MAINNET]: farm5,
  [ChainId.BSC]: farm56,
  [ChainId.BSC_TESTNET]: farm97,
}
