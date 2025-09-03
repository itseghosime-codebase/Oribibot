"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading and subtitle
      gsap.from(".pricing-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Stagger in cards
      gsap.from(".pricing-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      // Pulse effect on "MOST POPULAR"
      gsap.fromTo(
        ".popular-card",
        { scale: 0.95 },
        {
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ".popular-card",
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="text-center content pb-12 overflow-hidden"
    >
      <h2 className="pricing-header text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        ORBIBOT <span>PRICING</span>
      </h2>
      <p className="pricing-header text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light max-w-3xl mx-auto">
        Build strategies your way. With OrbiBot, you can automate custom trading
        on the exchange you trust.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-end">
        {PricingCards.map((items, idx) => (
          <div
            key={idx}
            className={`pricing-card border-2 rounded-2xl ${
              idx === 2 ? "border-primary popular-card" : "border-white"
            } overflow-hidden`}
          >
            {idx === 2 && (
              <div className="w-full bg-primary py-2">
                <h4 className="text-[#193A54] text-xl md:text-2xl font-bold">
                  MOST POPULAR
                </h4>
              </div>
            )}
            <div className="space-y-2 py-10 px-6">
              <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="underline decoration-2 underline-offset-4">
                  {items.plan}
                </span>
              </h5>
              <div className="flex justify-center items-baseline font-bold">
                <h3 className="text-4xl md:text-6xl">
                  <sup className="text-xl md:text-3xl lg:text-4xl">$</sup>
                  {items.price}
                </h3>
                <h4 className="text-3xl md:text-4xl">/YR</h4>
              </div>
              <ul>
                {items.offers.map((offers, idx) => (
                  <li
                    key={idx}
                    className="text-lg md:text-xl lg:text-2xl font-medium whitespace-pre-line"
                  >
                    <span>+</span> {offers}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`w-full text-[#193A54] text-2xl md:text-3xl pt-3 pb-2 ${
                idx === 2 ? "bg-primary" : "bg-white"
              } lg:text-4xl font-bold`}
            >
              SIGN UP NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

const PricingCards = [
  {
    plan: "METEOR",
    price: 250,
    offers: [
      "5 TRADE BOTS",
      "50 OPEN POSITIONS",
      "1 EXCHANGE\nCONNECTION",
      "COPY TRADING",
      "PORTFOLIO TRACKER",
      "GROUP SUPPORT",
      "FOUNDERS CLUB\nELIGIBLE",
      "AFFILIATE EARNINGS",
      "MEMBERSHIP APP",
    ],
  },
  {
    plan: "METEOROID",
    price: 500,
    offers: [
      "10 TRADE BOTS",
      "250 OPEN POSITIONS",
      "2 EXCHANGE\nCONNECTIONS",
      "COPY TRADING",
      "PORTFOLIO TRACKER",
      "GROUP SUPPORT",
      "FOUNDERS CLUB\nELIGIBLE",
      "AFFILIATE EARNINGS",
      "MEMBERSHIP APP",
    ],
  },
  {
    plan: "ASTEROID",
    price: 1000,
    offers: [
      "25 TRADE BOTS",
      "500 OPEN POSITIONS",
      "5 EXCHANGE\nCONNECTION",
      "COPY TRADING",
      "PORTFOLIO TRACKER",
      "1 ON 1 SUPPORT",
      "FOUNDERS CLUB\nELIGIBLE",
      "AFFILIATE EARNINGS",
      "MEMBERSHIP APP",
    ],
  },
  {
    plan: "COMET",
    price: 2000,
    offers: [
      "100 TRADE BOTS",
      "1000 OPEN POSITIONS",
      "5 EXCHANGE\nCONNECTION",
      "COPY TRADING",
      "PORTFOLIO TRACKER",
      "1 ON 1 SUPPORT",
      "FOUNDERS CLUB\nELIGIBLE",
      "AFFILIATE EARNINGS",
      "MEMBERSHIP APP",
    ],
  },
]
