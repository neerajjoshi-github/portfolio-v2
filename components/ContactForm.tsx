"use client";

import { Button } from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { contactFormSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/_actions";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const respose = await sendEmail(values);
    if (respose?.success) {
      reset();
      return toast.success("Message Sent Successfully!", {
        description: ` Thank you <strong>${values.username}</strong> for
            reaching out! I&apos;ll respond to your message as soon as possible.`,
      });
    }

    toast.error("Something went wrong!! Please try again.");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col py-4 rounded-lg w-full my-auto"
    >
      <div className="w-full pb-6 relative">
        <input
          className="w-full bg-transparent focus:outline-none focus-visible:border-white border border-zinc-400 py-2 px-4 rounded-lg text-lg"
          type="text"
          id="username"
          placeholder="Name"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-600 text-xs font-bold w-full absolute bottom-1 left-0 text-center">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="w-full pb-6 relative">
        <input
          className="w-full bg-transparent focus:outline-none focus-visible:border-white border border-zinc-400 py-2 px-4 rounded-lg text-lg"
          type="text"
          id="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-600 text-xs font-bold w-full absolute bottom-1 left-0 text-center">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="w-full pb-8 relative">
        <textarea
          className="w-full bg-transparent focus:outline-none focus-visible:border-white border border-zinc-400 py-2 px-4 rounded-lg text-lg"
          {...register("message")}
          id="message"
          rows={5}
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <p className="text-red-600 text-xs font-bold w-full absolute bottom-3 left-0 text-center">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button disabled={isSubmitting}>
        {isSubmitting ? <LoaderCircle /> : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
