"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Images } from "@/assets/images";
import { Button } from "./ui/button";
import Countdown from "./countDown";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.from(".hero-bg", {
        scale: 1.15,
        duration: 2,
        ease: "power3.out",
      });

      tl.from(".hero-badge", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-countdown",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
            ".hero-scroll",
            {
              opacity: 0,
              y: -20,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
  const section = document.getElementById("conteudo");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <section ref={heroRef} className="relative h-screen">
      <Image
        src={Images.Hero}
        alt="Hero"
        fill
        priority
        className="hero-bg object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center md:mt-8">
        <div className="hero-badge w-auto h-10 p-4 rounded-full bg-white/5 flex gap-1 items-center justify-center border border-gray-300 mb-4">
          <div className="w-3 h-3 rounded-full bg-green-600" />
          <p className="text-white md:text-sm text-xs font-inter font-medium">
            A primeira sessão começa no dia 30 de Junho, 2026
          </p>
        </div>

        <h1 className="hero-title md:text-7xl text-4xl font-satoshi font-bold text-white text-center">
          Master Front-End <br />
          <span className="text-orange-500">Development</span>
        </h1>

        <p className="hero-description md:text-lg text-base font-satoshi font-medium text-white text-center mt-4 md:w-152 w-100">
          De zero a pronto para o trabalho em 12 semanas intensivas.
          Construa projetos reais, aprenda com mentores da indústria
          e lance sua carreira como desenvolvedor front-end.
        </p>

        <div className="hero-buttons flex flex-col md:flex-row gap-3 mt-4">
          <Button className="h-14 rounded-full bg-orange-500 text-sm font-inter font-medium cursor-pointer">
            Agendar Agora - Assegure o seu lugar
          </Button>

          <Button
            variant="ghost"
            className="h-14 rounded-full text-sm font-inter font-medium cursor-pointer text-white border border-gray-300"
          >
            <a href="#conteudo">Explorar Conteúdo</a>
          </Button>
        </div>

        <div className="hero-countdown">
          <Countdown />
        </div>

        <p className="md:text-sm text-xs text-center text-gray-300 mt-3">
          Data de encerramento de vagas: 28, Junho
        </p>
      </div>

      <button onClick={scrollToContent} className="hero-scroll absolute md:bottom-2 bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white cursor-pointer group">
            <div className="animate-bounce">
                <ChevronDown
                size={32}
                className="group-hover:text-orange-500 transition-colors"
                />
            </div>
        </button>
    </section>
  );
}


