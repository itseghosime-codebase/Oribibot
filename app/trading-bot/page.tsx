import BottomSection from '@/components/BottomSection'
import Portfolio from '@/components/Portfolio'
import TradingBotBanner from '@/components/TradingBotBanner'
import World from '@/components/World'
import React from 'react'

export default function page() {
  return (
    <main>
      <TradingBotBanner />
      <Portfolio />
      <World />
      <BottomSection />
    </main>
  )
}
