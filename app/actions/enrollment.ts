"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEnrollment(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const experience = formData.get("experience") as string;
  const motivation = formData.get("motivation") as string;

  await supabase.from("enrollments").insert({
    name,
    email,
    experience,
    motivation,
  });

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kadyedgarpaulomachado@gmail.com",
    subject: "Nova candidatura CodeCraft",
    html: `
      <h2>Nova candidatura recebida</h2>

      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Experiência:</strong> ${experience}</p>
      <p><strong>Motivação:</strong> ${motivation}</p>
    `,
  });
}