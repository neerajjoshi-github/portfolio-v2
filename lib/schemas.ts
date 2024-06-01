import { z } from "zod";

export const contactFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Name cannot be less than 2 character." })
    .max(50, { message: "Username cannot be longer than 50 character." }),
  email: z.string().email(),
  message: z
    .string()
    .min(3, { message: "Message cannot be less than 3 character." }),
});
