import z, { coerce } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .email({ message: "Informe um e-mail válido" })
    .min(1, { message: "Informe o e-mail" }),
  name: z
    .string()
    .trim()
    .min(1, { message: "Informe um nome" })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  password: z
    .string()
    .min(1, { message: "Informe a senha" })
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    role: z.coerce.number()
});

export type SignUpFormSchema = z.infer<typeof signUpSchema>;

/////////// SignIn  //////////////

export const signInSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().trim().min(6, { message: "Informe a senha" }),
});

export type SignInFormSchema = z.infer<typeof signInSchema>;
