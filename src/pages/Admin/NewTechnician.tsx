import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { TIME_PERIODS, TIME_PERIODS_KEYS } from "@/types/hours";

export function NewTechnician() {
  const [hoursAvailable, setHoursAvailable] = useState<string[]>([]);
  console.log(TIME_PERIODS_KEYS);

  return (
    <div className="max-w-6xl h-full mx-auto py-10">
      <header className="flex justify-between">
        <div className="flex flex-col gap-2">
          <MoveLeft />
          <h1 className="text-4xl text-brand-dark">Perfil de técnico</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="light">Cancelar</Button>
          <Button variant="black">Salvar</Button>
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
          <form action="" className="flex flex-col gap-5">
            <Input label="Nome" placeholder="Nome completo" />
            <Input label="E-mail" placeholder="exemple@mail.com" />
            <Input label="Senha" placeholder="Defina a senha de acesso" />
            <Input
              label="Confirme a senha"
              placeholder="Repita a senha de acesso"
            />
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
                <ul className="">
                  {TIME_PERIODS[time_period].hours.map((hour) => (
                    <li className="p-4 rounded-full border-2 border-gray-400 mx-1 inline-flex mb-3 hover:opacity-80 hover:scale-105 transition ease-linear cursor-pointer">
                      <span className="text-gray-400">{hour}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
