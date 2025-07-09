import { useNavigate } from "react-router";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInFormSchema } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignIn() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInSchema),
  });

  function onSubmit(data: SignInFormSchema) {
    console.log(data);
  }
  return (
    <div>
      <div className="flex flex-col border border-gray-500 p-8 mb-5">
        <header className="mb-5">
          <h2 className="font-bold text-2xl mt-2">Acesse o portal</h2>
          <p className="text-gray-300 text-sm">
            Entre usando seu e-mail e senha cadastrados
          </p>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4  mb-5">
            <Input
              label="Email"
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
      <div className="flex flex-col border border-gray-500 p-8 ">
        <h3 className="font-bold text-2xl mt-2">Ainda não tem uma conta?</h3>
        <p className="text-gray-300 text-sm mb-5">Cadastre-se agora mesmo</p>
        <Button onClick={() => navigate("/signup")} variant="light">
          Cadastre-se
        </Button>
      </div>
    </div>
  );
}
