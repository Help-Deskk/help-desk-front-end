import { useNavigate } from "react-router";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormSchema } from "../schemas/authSchema";

export function SignUp() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(data: SignUpFormSchema) {
    console.log(data);
  }
  return (
    <div>
      <div className="flex flex-col border border-gray-500 p-8 mb-5">
        <header className="mb-5">
          <h2 className="font-bold text-2xl mt-2">Crie sua conta</h2>
          <p className="text-gray-300 text-sm">
            Crie usando seu nome, e-mail e senha 
          </p>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4  mb-5">
            <Input
              label="Nome"
              placeholder="Digite o nome completo"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.name.message}
              </p>
            )}

            <Input
              label="E-mail"
              placeholder="exemplo@email.com"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.email.message}
              </p>
            )}

            <Input
              label="Senha"
              placeholder="exemplo@email.com"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button variant="black">Entrar</Button>
        </form>
      </div>
      <div className="flex flex-col border border-gray-500 p-8">
        <h3 className="font-bold text-2xl mt-2">Já tem uma conta?</h3>
        <p className="text-gray-300 text-sm mb-5">Entre agora mesmo</p>
        <Button onClick={() => navigate("/")} variant="light">
          Acessar conta
        </Button>
      </div>
    </div>
  );
}
