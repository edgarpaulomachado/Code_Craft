"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { submitEnrollment } from "@/app/actions/enrollment";
import { useState } from "react";


export default function EnrollmentForm() {

 const [experience, setExperience] = useState<string | null>(null);


  return (
    <section className="flex justify-center px-4 py-20">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-pink-300/5 p-8">
        <div className="mb-8">
          <h2 className="font-satoshi text-4xl font-bold text-black">
            Garanta a Sua Vaga
          </h2>

          <p className="mt-3 font-inter text-gray-500">
            Preencha o formulário abaixo para participar da formação
            Master Front-End Development.
          </p>
        </div>

        <form action={submitEnrollment} className="space-y-6">
          <Field>
            <FieldLabel>Nome Completo</FieldLabel>

            <Input
              name="name"
              type="text"
              placeholder="Digite o seu nome completo"
            />
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>

            <Input
              name="email"
              type="email"
              placeholder="Digite o seu email"
            />
          </Field>

          <Field>
            <FieldLabel>Nível de Experiência</FieldLabel>

            <Select onValueChange={setExperience}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o seu nível" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="iniciante">
                  Iniciante
                </SelectItem>

                <SelectItem value="intermediario">
                  Intermediário
                </SelectItem>

                <SelectItem value="avancado">
                  Avançado
                </SelectItem>
              </SelectContent>
            </Select>

            <input
              type="hidden"
              name="experience"
              value={experience ?? ""}
            />

            <FieldDescription>
              Escolha o nível que melhor representa os seus conhecimentos atuais.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel>
              Por que deseja participar? (Opcional)
            </FieldLabel>

            <Textarea
              name="motivation"
              placeholder="Conte-nos um pouco sobre os seus objetivos..."
              className="min-h-32 resize-none"
            />
          </Field>

          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Aderir Agora
          </Button>
        </form>
      </div>
    </section>
  );
}