export default function Schedule() {
    return (
        <section id="cronograma" className="flex flex-col bg-pink-300/20 mt-20 px-6">
            <div className="w-30 h-10 rounded-full bg-orange-300/10 flex items-center justify-center p-4 mt-10">
                <p className="text-sm text-orange-500 font-inter font-medium">Cronograma</p>
            </div>

            <div className="md:flex-row flex flex-col md:justify-between">
                <h1 className="md:text-4xl text-2xl font-satoshi font-bold text-black mt-5">Sua Jornada em 12-Semanas</h1>
                <p className="md:text-base text-sm font-inter font-regular text-gray-500 md:w-100 mt-5 md:mt-0">Três fases cuidadosamente estruturadas te levam de iniciante a desenvolvedor front-end pronto para o mercado de trabalho, com cada fase se apoiando na anterior.</p>
            </div>
        </section>
    )
}