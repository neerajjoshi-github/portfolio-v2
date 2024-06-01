"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactFormSchema } from "./schemas";
import ContactFormEmailTemplate from "@/components/ContactFormEmailTemplate";

type ContactFormInputs = z.infer<typeof contactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = contactFormSchema.safeParse(data);

  if (result.success) {
    const { username, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "joshineeraj7037@gmail.com",
        subject: `Portfolio contact form submission from ${username}.`,
        text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmailTemplate({ username, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
