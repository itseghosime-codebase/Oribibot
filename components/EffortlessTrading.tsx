"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OribibotLogo from "@/assets/Logos/oribibot_logo.svg"

gsap.registerPlugin(ScrollTrigger)

export default function EffortlessTrading() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo
      gsap.from(".et-logo", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Animate text content
      gsap.from(".et-text", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="content my-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src={OribibotLogo}
            alt="Oribibot Logo"
            sizes="100%"
            className="et-logo h-20 md:h-24 lg:h-28 w-auto"
          />
        </div>
        <div className="md:text-end space-y-7">
          <h3 className="et-text font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Effortless Trading, <span>Built for All!</span>
          </h3>
          <p className="et-text text-xl md:text-2xl lg:text-3xl">
            While there are plenty of crypto trading bots out there, most are
            too complex for beginners. Many users give up before even deploying
            their first bot. At OrbiBot, we’re changing that.
          </p>
        </div>
      </div>
    </section>
  )
}
