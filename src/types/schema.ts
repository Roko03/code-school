import { z } from "zod";
import { LEVELS, SUBJECTS, patterns } from "../constants";

export const authenticationSchema = z.object({
    username: z.string().min(1, { message: "Unesite korisničko ime" }),
    password: z.string().min(6, { message: 'Šifra treba imati minimalno 6 znakova' })
})

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Unesite email" })
        .refine((text) => patterns.email.test(text), { message: "Unesite valjani email" })
})

export const adminUserFormSchema = z.object({
    username: z.string().min(1, { message: "Unesite korisničko ime" }),
    email: z.string().min(1, { message: "Unesite email" })
        .refine((text) => patterns.email.test(text), { message: "Unesite valjani email" }),
    password: z.string().min(6, { message: 'Šifra treba imati minimalno 6 znakova' }),
    bio: z.string().nullable(),
    role: z.enum(["adm", "stu", "prof"], {
        errorMap: () => ({ message: "Odaberi ulogu" })
    })
})

export const adminOrganizationFormSchema = z.object({
    name: z.string().min(1, { message: "Unesite ime organizacije" }),
    info: z.string().min(1, { message: "Unesite informacije o organizaciji" })
})

export const adminWorkshopFormSchema = z.object({
    name: z.string().min(1, { message: "Unesite ime radionice" }),
    date: z.string().min(1, { message: "Unesite datum radionice" }),
    instructor: z.string().min(1, { message: "Morate odabrati predavača" }),
    info: z
        .string()
        .min(5, { message: "Morate unijeti informacije o radionici" })
        .max(350, { message: "Ne smije imati poviše 350 znakova" }),
    level: z.enum(Object.keys(LEVELS) as [Level, ...Level[]], {
        errorMap: () => ({ message: "Molimo odaberite temu" }),
    }),
    subject: z.enum(Object.keys(SUBJECTS) as [Subject, ...Subject[]], {
        errorMap: () => ({ message: "Molimo odaberite temu" }),
    }),
})