'use client';

import ScheduleCard from "@/components/scheduleCard";
import { Images } from "@/assets/images";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Schedule() {
    const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".schedule-card-left", {
      scrollTrigger: {
        trigger: ".schedule-card-left",
        start: "top 85%",
      },
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".schedule-card-bottom", {
      scrollTrigger: {
        trigger: ".schedule-card-bottom",
        start: "top 85%",
      },
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".schedule-card-right", {
      scrollTrigger: {
        trigger: ".schedule-card-right",
        start: "top 85%",
      },
      x: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

    return (
        <section ref={sectionRef} id="cronograma" className="flex flex-col bg-pink-300/20 mt-20 px-6">
            <div className="w-30 h-10 rounded-full bg-orange-300/10 flex items-center justify-center p-4 mt-10">
                <p className="text-sm text-orange-500 font-inter font-medium">Cronograma</p>
            </div>

            <div className="md:flex-row flex flex-col md:justify-between">
                <h1 className="md:text-4xl text-2xl font-satoshi font-bold text-black mt-5">Sua Jornada em 12-Semanas</h1>
                <p className="md:text-base text-sm font-inter font-regular text-gray-500 md:w-100 mt-5 md:mt-0">Três fases cuidadosamente estruturadas te levam de iniciante a desenvolvedor front-end pronto para o mercado de trabalho, com cada fase se apoiando na anterior.</p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-15">
                <div className="schedule-cardl-eft">
                    <ScheduleCard 
                        title="Fundamentos"
                        description="Construa uma base sólida em tecnologias web. Domine a semântica do HTML, layouts em CSS, design responsivo e fundamentos de JavaScript através de exercícios práticos diários."
                        image={Images.Hero}
                        week="Semana 1-4"
                        highlighted
                        topics={[
                            "HTML5 Semântico",
                            "CSS Moderno",
                            "Flexbox e Grid",
                            "Responsividade",
                        ]}
                    />
                </div>

                <div className="schedule-card-bottom">
                    <ScheduleCard 
                        title="Front-End Avançado"
                        description="Mergulhe em React, gerenciamento de estado, integração de API e ferramentas modernas. Construa aplicações interativas complexas com dados reais e fluxos de trabalho padrão da indústria."
                        image={Images.Hero}
                        week="Semana 5-8"
                        topics={[
                            "React Hooks",
                            "Componentização",
                            "Next.js App Router",
                            "Deploy na Vercel",
                        ]}
                    />
                </div>

                <div className="schedule-card-right">
                    <ScheduleCard 
                        title="Início de Carreira"
                        description="Construa seu portfólio, encare um projeto final e se prepare para entrevistas técnicas. Termine com um currículo caprichado, projetos implementados e impulso na busca de emprego."
                        image={Images.Hero}
                        week="Semana 9-12"
                        topics={[
                            "Projecto Portfólio",
                            "Coaching de Carreira",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}