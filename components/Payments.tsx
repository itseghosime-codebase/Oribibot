"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Payments() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".payments-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      gsap.from(".payments-subheader", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      gsap.from(".payments-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="text-center pb-16 content overflow-hidden">
      <h2 className="payments-header text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
        CRYPTO PAYMENTS ACCEPTED
      </h2>
      <h3 className="payments-subheader text-primary font-normal text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2">
        Pay with Crypto. Power the Future.
      </h3>
      <p className="payments-text text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mt-4 font-light">
        At OrbiBot, we support the future of finance. By embracing blockchain
        technology, we stand for decentralization, financial freedom, and a more
        open digital economy. We believe in blockchain’s potential to reshape
        the world, decentralizing wealth, creating a freer internet, and
        unlocking new possibilities for all.
      </p>
    </section>
  )
}
