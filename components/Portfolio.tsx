"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Core from "@/assets/Icons/core.svg"
import Setup from "@/assets/Icons/Setup.svg"
import Moon from "@/assets/Icons/moon.svg"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".portfolio-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Animate cards with stagger
      gsap.from(".portfolio-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="content text-center">
      <h2 className="portfolio-heading font-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        WHY USE ORBIBOT FOR <span>YOUR PORTFOLIO?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-5 my-6">
        {PortfolioContent.map((cont, idx) => (
          <div
            className={`portfolio-card flex ${
              idx === 1
                ? "md:border-x border-primary border-y p-5 md:border-y-0"
                : ""
            } flex-col items-center justify-center gap-5`}
            key={idx}
          >
            <Image
              src={cont.icon}
              alt={"Icon"}
              sizes="100%"
              className="h-16 md:h-20 lg:h-24 w-auto"
            />
            <h5 className="text-xl md:text-2xl lg:text-3xl font-medium whitespace-pre-line text-primary">
              {cont.heading}
            </h5>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-pretty max-w-3xs">
              {cont.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const PortfolioContent = [
  {
    icon: Core,
    heading: "Boost Returns with\nAlgorithmic Trading",
    description:
      "Say goodbye to manual crypto trading! OrbiBot simplifies trading with its fully automated bot, designed to grow your portfolio without stress, emotions, or constant monitoring.",
  },
  {
    icon: Setup,
    heading: "Streamlined Setup,\nSmooth Integration",
    description:
      "Effortless Binance Automation with OrbiBot. No trading experience? No problem. Instantly managing and diversifying your portfolio for smarter risk management.",
  },
  {
    icon: Moon,
    heading: "Save Time. Trade\nSmarter. Stress Less",
    description:
      "Take the stress out of crypto. OrbiBot automates your portfolio, eliminating the need to monitor charts, react to news, or manage trades manually, so you can focus on what truly matters.",
  },
]
