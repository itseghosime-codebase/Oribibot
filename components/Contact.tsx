"use client"

import Link from "next/link"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ContactForm from "./ContactForm"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".contact-heading", {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Animate subtitle + email
      gsap.from(".contact-sub", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      // Animate form
      gsap.from(".contact-form", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="content mb-20 overflow-hidden">
      <h2 className="contact-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
        CONTACT <span>ORBIBOT</span>
      </h2>

      <div className="text-center space-y-1 my-6">
        <h3 className="contact-sub font-medium underline underline-offset-[6px] decoration-[3px] text-2xl md:text-3xl lg:text-4xl">
          GOT A QUESTION?
        </h3>
        <p className="contact-sub text-lg md:text-xl lg:text-2xl tracking-widest font-light">
          <span>EMAIL:</span>{" "}
          <Link href={"mailto:SUPPORT@ORBIBOT.COM"}>SUPPORT@ORBIBOT.COM</Link>
        </p>
      </div>

      <div className="contact-form">
        <ContactForm />
      </div>
    </section>
  )
}
