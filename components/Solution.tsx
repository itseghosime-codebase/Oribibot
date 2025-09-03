"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Chart from "@/assets/Icons/chart.svg"
import Padlock from "@/assets/Icons/padlock.svg"
import Personnel from "@/assets/Icons/personnel.svg"
import Wireless from "@/assets/Icons/wireless.svg"

gsap.registerPlugin(ScrollTrigger)

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section enters viewport
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="text-center pb-16 content overflow-hidden"
    >
      <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light">
        SMART SOLUTIONS FOR{" "}
        <span className="text-primary underline underline-offset-4 decoration-2">
          EVERY CRYPTO ROLE
        </span>
      </h3>
      <p className="text-xl md:text-2xl max-w-3xl font-light tracking-wider mx-auto">
        Whether you&apos;re a hands-on trader, a portfolio expert, a signal provider,
        or a strategy follower... OrbiBot gives you the tools you need to
        succeed.
      </p>

      <div
        ref={cardsRef}
        className="mt-9 grid md:grid-cols-2 xl:grid-cols-4 items-start gap-5"
      >
        {Solutions.map((solution, item) => (
          <div
            key={item}
            className="flex items-center justify-start flex-col text-center gap-4 border-4 rounded-2xl border-white py-10 px-4 md:px-6 h-full"
          >
            <Image
              src={solution.icon}
              alt={solution.name}
              sizes="100%"
              className="h-12 w-auto"
            />
            <h4 className="text-primary text-3xl lg:text-4xl xl:whitespace-pre-line font-normal">
              {solution.name}
            </h4>
            <h5 className="text-2xl lg:text-3xl font-medium xl:whitespace-pre-line">
              {solution.label}
            </h5>
            <p className="text-xl md:text-2xl font-light text-pretty">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Solutions = [
  {
    icon: Chart,
    name: "CRYPTO\nTRADERS",
    label: "Trade faster.\nAutomate smarter.",
    description:
      "Deploy powerful bots, execute strategies with precision, and stay ahead of the market — all while keeping full control at your fingertips.",
  },
  {
    icon: Padlock,
    name: "ASSET\nMANAGERS",
    label: "Manage portfolios,\nnot paperwork.",
    description:
      "Seamlessly scale your strategies across multiple accounts, automate allocations, and achieve results with complete transparency and control.",
  },
  {
    icon: Personnel,
    name: "COPY\nTRADERS",
    label: "Trade like a pro.\nNo delay.",
    description:
      "Mirror the best. Follow elite traders live and grow your crypto portfolio on autopilot.",
  },
  {
    icon: Wireless,
    name: "SIGNAL\nPROVIDERS",
    label: "Turn your strategy\ninto income",
    description:
      "Share your trading signals with a global audience and earn! Fully automated, seamlessly integrated.",
  },
]
