import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormSchema } from "../../schemas/authSchema";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";

export function SignUp() {
  const navigate = useNavigate();
  const { save } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: SignUpFormSchema) {
    console.log(data);
    
    try {
      setIsLoading(true);
      const response = await api.post("/users/tokens/sign_up", data);
      console.log(response.data);
      if (response.status === 201) {
        toast.success("Usuário criado com sucesso!", {
          onClose: () => navigate("/"),
          autoClose: 2000,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data.message);
      }
      return toast.error("Email ou senha inválidos");
    } finally {
      setIsLoading(false);
    }
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
            <Input label="role" type="number" {...register("role")}/>
            {errors.role?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.role.message}
              </p>
            )}
          </div>
          <Button type="submit" variant="black">
            Cadastrar
          </Button>
        </form>
      </div>
      <div className="flex flex-col border border-gray-500 p-8">
        <h3 className="font-bold text-2xl mt-2">Já tem uma conta?</h3>
        <p className="text-gray-300 text-sm mb-5">Entre agora mesmo</p>
        <Button onClick={() => navigate("/")} variant="light">
          Acessar conta
        </Button>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}
