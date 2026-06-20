import EnrollmentForm from "@/components/enrollmentForm";
import {
  CalendarDays,
  Monitor,
  Clock3,
} from "lucide-react";

import CourseInfoItem from "@/components/courseInfoItem";

export default function Enrollment() {
    return (
        <section id="preco" className="mt-15 md:flex-row flex flex-col justify-between px-5">
            <div className="flex flex-col mt-5">
                <div className="w-30 h-10 rounded-full bg-orange-300/10 flex items-center justify-center p-4 mt-10">
                    <p className="text-sm text-orange-500 font-inter font-medium">Aderir Agora</p>
                </div>

                <h1 className="md:text-4xl text-2xl font-satoshi font-bold text-black mt-5">Pronto Para Começar a Sua Jornada?</h1>
                <p className="md:text-base text-sm font-inter font-regular text-gray-500 md:w-100 mt-5">Garanta sua vaga na nossa próxima turma. Limitada a 30 alunos por turma para garantir mentoria personalizada e atenção prática.</p>

                <div className="flex flex-col gap-6 mt-5">
                    <CourseInfoItem
                        icon={CalendarDays}
                        label="Data de Início"
                        value="30 de Junho de 2026"
                    />

                    <CourseInfoItem
                        icon={Monitor}
                        label="Formato"
                        value="Online (Google Meet)"
                    />

                    <CourseInfoItem
                        icon={Clock3}
                        label="Duração"
                        value="12 Semanas (2h por dia)"
                    />
                </div>
            </div>

            <EnrollmentForm />
        </section>
    )
}