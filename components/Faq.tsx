"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Faq() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="content mb-12 space-y-5">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
        FREQUENTLY ASKED <span>QUESTIONS</span>
      </h2>

      <div className="space-y-3">
        {FaqQuestions.map((faq, index) => (
          <div
            key={index}
            className="faq-item py-5 md:py-7 px-5 md:px-7 lg:px-9 border rounded-3xl border-primary"
          >
            <h3 className="font-medium text-primary text-2xl md:text-3xl lg:text-4xl">
              {faq.label}
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl">{faq.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}



const FaqQuestions = [
  {
    label: 'What Exactly Does a Crypto Trading Bot Do?',
    description: 'OrbiBot leverages cutting-edge algorithms and machine learning to analyze market trends and execute trades automatically for users. By tracking price movements and key indicators in real time, it makes intelligent, data-driven trading decisions without the need for manual input.',
  }, {
    label: 'Why choose OrbiBot as your crypto trading bot?',
    description: 'OrbiBot delivers automated crypto trading powered by sophisticated strategies, allowing users to take advantage of market fluctuations without the need for constant monitoring. Its goal is simple: maximize profits while effectively managing risk.',
  }, {
    label: 'Is Orbibot Safe to use?',
    description: 'Yes, OrbiBot prioritizes the security of your funds and personal information. It employs robust encryption and follows industry best practices to ensure a safe and trusted trading experience.',
  }, {
    label: 'Which Cryptocurrencies are tradeable with OrbiBot?',
    description: 'OrbiBot supports a broad selection of cryptocurrencies, including popular ones like Bitcoin (BTC), Ethereum (ETH), and several altcoins. To see the full and current list of supported assets, visit the platform.',
  }, {
    label: 'Which trading strategies does OrbiBot employ?',
    description: 'OrbiBot combines technical analysis, trend-following techniques, and machine learning algorithms to craft its trading strategies. These strategies are constantly refined to adapt dynamically to evolving market conditions.',
  }, {
    label: 'Can users tailor their trading strategies in OrbiBot?',
    description: 'OrbiBot provides a selection of pre-defined trading strategies optimized for various market conditions. While custom strategy creation isn’t currently supported, its algorithms are designed to adapt and perform effectively across changing market environments.',
  }, {
    label: 'How much does OrbiBot cost?',
    description: 'You can find the different tiers offered by OrbiBot on our Pricing page.',
  }, {
    label: 'Does OrbiBot protect my personal and financial data?',
    description: 'OrbiBot is deeply committed to protecting user privacy and data security. The platform uses advanced encryption protocols and adheres to industry best practices to safeguard your personal and financial information. Additionally, OrbiBot securely stores API keys and restricts access strictly to essential functions, ensuring your account’s safety at every step.',
  }, {
    label: 'Is profit guaranteed when trading with OrbiBot?',
    description: 'While OrbiBot employs advanced algorithms to optimize trading strategies, it’s important to understand that cryptocurrency trading carries inherent risks, and profits cannot be guaranteed. Past performance does not predict future results, so users should trade responsibly and stay mindful of market volatility.',
  }
]