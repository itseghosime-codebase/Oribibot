"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import BotImage from "@/assets/Icons/BOT.svg"

export default function Banner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLHeadingElement>(null)
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const botRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } })

    tl.from(headingRef.current, { y: 40, opacity: 0 })
      .from(subHeadingRef.current, { y: 40, opacity: 0 }, "-=0.5")
      .from(gsap.utils.toArray(paragraphsRef.current?.children || []), {
        y: 25,
        opacity: 0,
        stagger: 0.15,
      })
      .from(buttonRef.current, { scale: 0.9, opacity: 0 }, "-=0.3")
      .from(botRef.current, { xPercent: -30, opacity: 0, duration: 1 }, "-=0.8")
  }, sectionRef)

  return () => ctx.revert()
}, [])


  return (
    <section
      ref={sectionRef}
      className="content relative pb-20 space-y-5 overflow-hidden"
    >
      <div className="text-left md:text-end space-y-8 relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
        >
          AI CRYPTO TRADING WITH{" "}
          <span className="underline underline-offset-4">ORBIBOT</span>
        </h1>

        <h2
          ref={subHeadingRef}
          className="font-light text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-8 xl:leading-14 tracking-widest"
        >
          GROW YOUR PORTFOLIO <br />
          <span className="font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-normal">
            WITH CRYPTO
          </span>
        </h2>

        <div ref={paragraphsRef} className="space-y-6 text-2xl max-w-3xl ms-auto">
          <p>
            When it comes to AI-driven crypto trading, Orbibot is setting a new
            standard. <br />
            Its next-generation machine learning algorithm continuously
            evolves—sharpening its ability to maximize profit potential while
            minimizing risk.
          </p>
          <p>
            Orbibot brings intelligent diversification to the crypto space,
            managing a wide-ranging portfolio that includes leading
            cryptocurrencies, stablecoins, trending memecoins, and promising
            up-and-coming altcoins.
          </p>
          <p>
            Trusted by a growing global userbase, Orbibot is fully licensed to
            offer AI-powered financial services, delivering a secure and
            compliant platform for trading digital assets with confidence.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="text-3xl font-semibold pt-3 pb-2 px-7 border rounded-2xl border-primary"
        >
          <span className="drop-shadow-[0_0_5px_#FFCC00]">JOIN NOW!</span>
        </button>
      </div>

      {/* Bot Image */}
      <div
        ref={botRef}
        className="md:!absolute md:left-0 md:bottom-20 md:z-0 md:opacity-50 xl:opacity-100"
      >
        <Image
          src={BotImage}
          alt="Bot"
          sizes="100%"
          className="h-auto w-full max-w-[440px]"
        />
      </div>
    </section>
  )
}
