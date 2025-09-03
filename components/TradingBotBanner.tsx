"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"

import CandleStick from "@/assets/Graphs/candleStick.svg"

export default function TradingBotBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".bot-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Animate subheading
      gsap.from(".bot-subheading", {
        y: 30,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      })

      // Animate paragraph
      gsap.from(".bot-description", {
        y: 20,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "power3.out",
      })

      // Animate button
      gsap.from(".bot-button", {
        scale: 0.9,
        opacity: 0,
        delay: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
      })

      // Animate graph
      gsap.from(".bot-graph", {
        x: 80,
        opacity: 0,
        delay: 0.8,
        duration: 1.2,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="content pb-14">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-3 max-w-lg">
          <h3 className="bot-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
            ORBIBOT <span>TRADING BOT</span>
          </h3>
          <h4 className="bot-subheading text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-12">
            Automate Your Portfolio With The Best Crypto Trading Bot
          </h4>
          <p className="bot-description text-lg md:text-xl lg:text-2xl tracking-wider">
            Say goodbye to manual crypto trading. Orbibot takes the complexity
            out of crypto with a fully automated trading bot designed to grow
            your portfolio! No stress, no emotions, no constant monitoring.
          </p>
          <button className="bot-button text-3xl font-semibold pt-3 pb-2 px-7 border rounded-2xl border-primary">
            <span className="drop-shadow-[0_0_5px_#FFCC00]">JOIN NOW!</span>
          </button>
        </div>
        <div>
          <Image
            src={CandleStick}
            alt="Candle Stick Graph"
            className="bot-graph h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
