import Link from "next/link";
import { Button } from "@/components/ui/button"; 

export default function Header() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-8 flex items-center justify-between p-8">
            <div className="flex gap-2 items-center justify-center">
                <h1 className="text-xl font-bold text-white font-satoshi">CodeCraft</h1>
                <div className="w-auto h-3 rounded-full bg-white/10 p-2 flex items-center justify-center border border-gray-500">
                    <p className="text-xs text-white font-inter font-regular">Lumina</p>
                </div>
            </div>

            <nav>
                <ul className="flex gap-3 text-white font-inter text-sm">
                    <li><Link href="#conteudo">Conteúdo</Link></li>
                    <li><Link href="#cronograma">Cronograma</Link></li>
                    <li><Link href="#preco">Preço</Link></li>
                </ul>
            </nav>

            <Button className="w-30 h-12 rounded-3xl text-sm font-inter font-medium cursor-pointer">Aderir Agora</Button>
        </div>
    )
}