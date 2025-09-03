import BottomSection from '@/components/BottomSection'
import Payments from '@/components/Payments'
import Pricing from '@/components/Pricing'
import React from 'react'

export default function page() {
  return (
    <main>
      <Pricing />
      <Payments />
      <BottomSection />
    </main>
  )
}
