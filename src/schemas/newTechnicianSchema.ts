import z from "zod";

export const newTechnicianSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres "),
    email: z
      .string()
      .email("Digite um email válido")
      .min(1, { message: "Informe o e-mail" }),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type NewTechnicianSchema = z.infer<typeof newTechnicianSchema>;
