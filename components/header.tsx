"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3 px-4 md:px-8"
          : "bg-transparent py-6 px-4 md:px-8"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <h1 className="text-xl font-bold text-white font-satoshi">
            CodeCraft
          </h1>

          <div className="hidden md:flex h-6 px-2 rounded-full bg-white/10 items-center justify-center border border-gray-500">
            <p className="text-xs text-white font-inter">Lumina</p>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white font-inter text-sm">
            <li>
              <Link
                href="#conteudo"
                className="transition-colors hover:text-orange-500"
              >
                Conteúdo
              </Link>
            </li>

            <li>
              <Link
                href="#cronograma"
                className="transition-colors hover:text-orange-500"
              >
                Cronograma
              </Link>
            </li>

            <li>
              <Link
                href="#preco"
                className="transition-colors hover:text-orange-500"
              >
                Preço
              </Link>
            </li>
          </ul>
        </nav>


        <Button className="hidden md:flex h-12 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all duration-300">
          Aderir Agora
        </Button>


        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-4">
          <nav>
            <ul className="flex flex-col gap-4 text-white font-inter">
              <li>
                <Link
                  href="#conteudo"
                  className="block hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Conteúdo
                </Link>
              </li>

              <li>
                <Link
                  href="#cronograma"
                  className="block hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cronograma
                </Link>
              </li>

              <li>
                <Link
                  href="#preco"
                  className="block hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Preço
                </Link>
              </li>

              <Button
                className="w-full mt-2 rounded-full bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Aderir Agora
              </Button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}