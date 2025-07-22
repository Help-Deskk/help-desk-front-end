import { useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TechnicianItem } from "./TechnicianItem";

const MOCK_TECHNICIANS: TechnicianAPIResponse[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@helpdesk.com",
    disponibility: ["Segunda"],
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@helpdesk.com",
    disponibility: ["Quinta"],
  },
  {
    id: "3",
    name: "Pedro Costa",
    email: "pedro.costa@helpdesk.com",
    disponibility: ["Segunda"],
  },
  {
    id: "4",
    name: "Ana Oliveira",
    email: "ana.oliveira@helpdesk.com",
    disponibility: ["Terça"],
  },
  {
    id: "5",
    name: "Carlos Pereira",
    email: "carlos.pereira@helpdesk.com",
    disponibility: ["Segunda"],
  },
  {
    id: "6",
    name: "Luiza Ferreira",
    email: "luiza.ferreira@helpdesk.com",
    disponibility: ["Sábado"],
  },
  {
    id: "7",
    name: "Roberto Lima",
    email: "roberto.lima@helpdesk.com",
    disponibility: ["Segunda"],
  },
  {
    id: "8",
    name: "Fernanda Alves",
    email: "fernanda.alves@helpdesk.com",
    disponibility: ["Terça"],
  },
  {
    id: "9",
    name: "Ricardo Souza",
    email: "ricardo.souza@helpdesk.com",
    disponibility: ["Segunda"],
  },
  {
    id: "10",
    name: "Juliana Cardoso",
    email: "juliana.cardoso@helpdesk.com",
    disponibility: ["Quarta"],
  },
];

export function Technician() {
  const [isLoading, setIsLoading] = useState(false);
  const [technician, setTechnician] = useState<TechnicianAPIResponse[] | null>(
    MOCK_TECHNICIANS
  );
  async function fetchTechnician() {
    setIsLoading(true);
    try {
      const response = await api.get("/technician");
      setTechnician(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl text-brand-dark">Tecnicos</h1>
      </header>
      <div className="rounded-lg border border-gray-400 md:h-[600px] overflow-y-scroll ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="flex justify-between">
            <th className=" p-5 text-xs font-medium text-gray-400 uppercase ">
              Nome
            </th>
            <th className="p-5 text-xs font-medium text-gray-400 uppercase ">
              E-mail
            </th>
            <th className="p-5 text-xs font-medium text-gray-400 uppercase ">
              Disponibilidade
            </th>
            <th className="p-5 text-xs font-medium text-gray-400 uppercase">
              Ações
            </th>
          </thead>
          <tbody className=" ">
            {technician?.map((technician) => (
              <TechnicianItem data={technician} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
