import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | 9mm Swap',
  defaultTitle: 'Blog | 9mm Swap',
  description:
    'Cheaper and faster than Uniswap? Discover 9mm Swap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@9mm Swap',
    site: '@9mm Swap',
  },
  openGraph: {
    title: '🥞 9mm Swap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by 9mm Swap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://pancakeswap.finance/images/hero.png' }],
  },
}
