import { z } from "zod";
import { patterns } from "../constants";

export const authenticationSchema = z.object({
    username: z.string().min(1, { message: "Unesite korisničko ime" }),
    password: z.string().min(6, { message: 'Šifra treba imati minimalno 6 znakova' })
})

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Unesite email" })
        .refine((text) => patterns.email.test(text), { message: "Unesite valjani email" })
})