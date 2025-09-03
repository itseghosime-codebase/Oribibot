"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Bot from "@/assets/Icons/BOT.svg"

gsap.registerPlugin(ScrollTrigger)

export default function World() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".world-image", {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".world-text", {
        x: 80,
        opacity: 0,
        duration: 1.2,
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
    <section
      ref={sectionRef}
      className="content py-10 grid md:grid-cols-2 items-center gap-10"
    >
      <div>
        <Image
          src={Bot}
          alt="Bot Image"
          className="world-image h-full w-full max-h-96"
        />
      </div>
      <div className="world-text text-left md:text-end space-y-4">
        <h2 className="font-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-14">
          OUT OF THIS WORLD TRADING WITH{" "}
          <span className="underline decoration-2 underline-offset-4 font-bold">
            ORBIBOT
          </span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light">
          OrbiBot is the ultimate crypto trading bot for all variations of
          traders. Powered by cutting-edge algorithms, OrbiBot makes automated
          crypto trading effortless, removing the need for manual trades.
          Whether you’re a beginner or an expert, OrbiBot delivers stress-free
          portfolio management and maximized returns.
        </p>
        <Link
          href={""}
          className="pt-3 pb-2.5 px-7 ms-auto rounded-lg bg-primary w-fit text-xl lg:text-2xl font-bold hidden lg:block transition-colors ease-in duration-200 text-secondary drop-shadow-[0_0_10px_#FFCC00]"
        >
          GET STARTED
        </Link>
      </div>
    </section>
  )
}
