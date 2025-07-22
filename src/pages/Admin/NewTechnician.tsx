import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ArrowLeft, MoveLeft, MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import { TIME_PERIODS, TIME_PERIODS_KEYS } from "@/types/hours";
import { useForm } from "react-hook-form";
import { newTechnicianSchema } from "../../schemas/newTechnicianSchema";
import type { NewTechnicianSchema } from "@/schemas/newTechnicianSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export function NewTechnician() {
  const [hoursAvailable, setHoursAvailable] = useState<string[]>([]);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<NewTechnicianSchema>({
    resolver: zodResolver(newTechnicianSchema),
  });

  async function onSubmit(data: NewTechnicianSchema) {
    const newTechnician = {
      ...data,
      hoursAvailable: [...hoursAvailable],
    };
    reset();
    toast.success("Técnico criado com sucesso");
    setHoursAvailable([]);
    console.log(newTechnician);
  }

  return (
    <div className="max-w-6xl h-full mx-auto py-10">
      <header className="flex justify-between items-center ">
        <div className="flex flex-col gap-2">
          <ArrowLeft
            strokeWidth={1.5}
            onClick={() => navigate(-1)}
            className="hover:cursor-pointer text-gray-300"
          />
          <h1 className="text-4xl text-brand-dark">Perfil de técnico</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="light" className="h-15">
            Cancelar
          </Button>
          <Button
            variant="black"
            className="h-15"
            onClick={handleSubmit(onSubmit)}
          >
            Salvar
          </Button>
        </div>
      </header>

      <main className="flex flex-col md:flex-row items-center  gap-6 p-10 mt-10">
        <section className="p-6 w-96 border border-gray-500 rounded-xl ">
          <h2 className="text-gray-200 text-xl font-semibold mb-2">
            Dados pessoais
          </h2>
          <p className="text-gray-300 text-md mb-5">
            Defina as informações do perfil de técnico
          </p>
          <form className="flex flex-col gap-6.5">
            <Input
              label="Nome"
              placeholder="Nome completo"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.name.message}
              </p>
            )}
            <Input
              label="E-mail"
              placeholder="exemple@mail.com"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.email.message}
              </p>
            )}
            <Input
              label="Senha"
              type="password"
              placeholder="Defina a senha de acesso"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.password.message}
              </p>
            )}
            <Input
              label="Confirme a senha"
              type="password"
              placeholder="Repita a senha de acesso"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword?.message && (
              <p className="text-[12px] text-feedback-danger -mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </form>
        </section>
        <section className="p-6 border border-gray-500 rounded-xl">
          <h2 className="text-gray-200 text-xl font-semibold mb-2">
            Horários de atendimento
          </h2>
          <p className="text-gray-300 text-md mb-5">
            Selecione os horários de disponibilidade do técnico para atendimento
          </p>
          <div>
            {TIME_PERIODS_KEYS.map((time_period, i) => (
              <div className="flex flex-col gap-2 ">
                <span className="text-gray-300">
                  {TIME_PERIODS[time_period].label}
                </span>
                <ul>
                  {TIME_PERIODS[time_period].hours.map((hour) => (
                    <li
                      key={hour}
                      className={`p-4 rounded-full border-2 border-gray-400 mx-1 inline-flex mb-3 hover:opacity-80 hover:scale-105 transition ease-linear cursor-pointer ${
                        hoursAvailable.includes(hour)
                          ? "bg-brand-base text-gray-500"
                          : "bg-none"
                      }`}
                      onClick={() =>
                        setHoursAvailable((prevHours) =>
                          prevHours.includes(hour)
                            ? prevHours.filter((h) => h !== hour)
                            : [...prevHours, hour]
                        )
                      }
                    >
                      <span
                        className={`${
                          hoursAvailable.includes(hour)
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        {hour}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
}
