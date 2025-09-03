"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import OribibotLogo from "@/assets/Logos/oribibot_logo.svg"
import Graph from "@/assets/Graphs/Graph.svg"
import NewsLetter from "./NewsLetter"

gsap.registerPlugin(ScrollTrigger)

export default function BottomSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".bottom-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Animate graph
      gsap.from(".bottom-graph", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      // Animate links
      gsap.from(linksRef.current?.children || [], {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current,
          start: "top 85%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="content pb-10">
        <div className="w-fit text-center mx-auto px-5 bg-primary text-[#193A51] pt-2">
          <h2 className="bottom-heading text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            SMARTER TOOLS, BETTER TRADING.
          </h2>
        </div>

        <Image
          src={Graph}
          alt="Graph"
          sizes="100%"
          className="bottom-graph h-auto w-full"
        />

        <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
          <div className="order-2 md:order-1">
            <Link href={"/"}>
              <Image
                src={OribibotLogo}
                alt="Oribibot"
                sizes="100%"
                className="h-7 md:h-8 lg:h-9 xl:h-10 w-auto"
              />
            </Link>

            <div ref={linksRef} className="mt-7">
              {LinkTags.map((links, id) => (
                <Link
                  key={id}
                  href={links.href}
                  className="transition-colors block ease-in duration-200 text-2xl w-full hover:text-primary"
                >
                  {links.label}
                </Link>
              ))}
            </div>
          </div>
          <NewsLetter />
        </div>
      </section>
      <footer className="bg-[#D9D9D9]/30 text-center uppercase text-lg md:text-xl lg:text-2xl backdrop-blur-3xl pt-3 pb-2 tracking-[0.25em] font-normal">
        <p>Copyright © 2025 OrbiBot. All rights reserved.</p>
      </footer>
    </>
  )
}

const LinkTags = [
  { label: "TRADING BOT", href: "trading-bot" },
  { label: "PRICING", href: "pricing" },
  { label: "ABOUT", href: "about" },
  { label: "CONTACT", href: "contact" },
  { label: "FAQ", href: "faq" },
]
