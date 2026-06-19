import Image from "next/image";
import { Images } from "@/assets/images";
import { Button } from "./ui/button";
import Countdown from "./countDown";

export default function Hero() {
    return (
        <section className="relative h-screen">
            <Image
                src={Images.Hero}
                alt="Hero"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col h-full items-center justify-center md:mt-8">
                <div className="w-auto h-10 p-4 rounded-full bg-white/5 flex gap-1 items-center justify-center border border-gray-300 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-600" />
                    <p className="text-white md:text-sm text-xs font-inter font-medium">A primeira sessão começa no dia 30 de Junho, 2026</p>
                </div>

                <h1 className="md:text-7xl text-4xl font-satoshi font-bold text-white text-center">Master Front-End <br/> <span className=" text-orange-500">Development</span></h1>
                <p className="md:text-lg text-base font-satoshi font-medium text-white text-center mt-4 md:w-152 w-100">De zero a pronto para o trabalho em 12 semanas intensivas. Construa projetos reais, aprenda com mentores da indústria e lance sua carreira como desenvolvedor front-end.</p>

                <div className="md:flex-row gap-3 mt-4 flex flex-col">
                    <Button className="h-14 rounded-full bg-orange-500 text-sm font-inter font-medium cursor-pointer">Agendar Agora - Assegure o seu lugar</Button>
                    <Button variant="ghost" className="h-14 rounded-full text-sm font-inter font-medium cursor-pointer text-white border border-gray-300">Explorar Conteúdo</Button>
                </div>

                <Countdown/>

                <p className="md:text-sm text-xs text-center text-gray-300 mt-3">Data de encerramento de vagas: 28, Junho</p>
            </div>

        </section>
    )
}