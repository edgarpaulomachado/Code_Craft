"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureCard from "@/components/curriculumCard";
import { Images } from "@/assets/images";

gsap.registerPlugin(ScrollTrigger);

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".curriculum-badge", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".curriculum-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.from(".curriculum-description", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".curriculum-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="conteudo"
      className="flex flex-col items-center justify-center mt-15"
    >
      <div className="curriculum-badge w-auto h-10 rounded-full bg-green-300/10 flex items-center justify-center p-4">
        <p className="text-sm text-green-500 font-inter font-medium">
          Conteúdo
        </p>
      </div>

      <h1 className="curriculum-title md:text-5xl text-3xl font-satoshi font-bold text-black text-center mt-5">
        O Que irá Aprender
      </h1>

      <p className="curriculum-description md:text-base text-sm text-center font-satoshi text-gray-600 mt-3 md:w-150 w-90">
        Um conteúdo cuidadosamente elaborado que cobre tudo o que os
        desenvolvedores front-end modernos precisam — desde fundamentos
        até habilidades prontas para a produção.
      </p>

      <div className="curriculum-grid grid md:grid-cols-3 grid-cols-1 gap-3 mt-15">
        <FeatureCard
            title="HTML"
            description="Domine a semântica moderna do HTML5, os padrões de acessibilidade e a arquitetura de documentos estruturados para aplicações no mundo real."
            image={Images.HTML}
        />

        <FeatureCard 
            title="CSS e Layouts Modernos"
            description="Mergulhe fundo no Flexbox, Grid, propriedades personalizadas, animações e padrões de design responsivo usados na prática."
            image={Images.CSS}
        />

        <FeatureCard 
            title="JavaScript & ES6+"
            description="Do básico ao avançado — closures, promises, async/await, módulos e sintaxe moderna do ES6+."
            image={Images.JavaScript}
        />

        <FeatureCard 
            title="Design Responsivo"
            description="Princípios de design mobile-first, consultas de mídia, pontos de interrupção e testes em vários dispositivos para experiências perfeitas."
            image={Images.Mobile}
        />

        <FeatureCard 
            title="Git & Controle de Versão"
            description="Colabore como um profissional — estratégias de branches, pull requests, revisões de código e fluxos de trabalho de CI/CD."
            image={Images.Git}
        />
      </div>
    </section>
  );
}