"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import BotWIthBg from "@/public/bot.gif"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".about-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="content overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="about-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            ABOUT <span>ORBIBOT</span>
          </h2>
          <h3 className="about-text font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Profitability. Simplicity. Speed.
          </h3>
          <p className="about-text text-xl md:text-2xl lg:text-3xl">
            We&apos;re building the most powerful trading bot available — engineered
            for performance, simplicity, and trust. OrbiBot combines advanced
            AI-driven algorithms with an intuitive interface, making it
            incredibly easy to use, even for beginners. Whether you&apos;re a
            seasoned trader or just starting out, OrbiBot delivers a seamless,
            secure, and high-performance trading experience that adapts to your
            goals.
          </p>
        </div>
        <div >
          <div className="border about-image border-primary p-4 rounded-[55px] mx-auto flex justify-center w-auto max-w-[420px]">
            <Image
              src={BotWIthBg}
              alt="Bot with Background"
              sizes="100%"
              className=" h-auto w-full max-w-[420px] rounded-[45px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
