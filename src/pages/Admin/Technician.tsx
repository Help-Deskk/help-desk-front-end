import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { TechnicianItem } from "./TechnicianItem";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
// import type { TechExemple, } from "@/dtos/technician";

const MOCK_TECHNICIANS: TechnicianAPIResponse[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@helpdesk.com",
    disponibility: ["08:00", "09:00", "10:00", "10:00", "10:00"],
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@helpdesk.com",
    disponibility: ["09:00", "10:00", "11:00", "15:00"],
  },
  {
    id: "3",
    name: "Pedro Costa",
    email: "pedro.costa@helpdesk.com",
    disponibility: ["08:00", "09:00", "13:00", "14:00"],
  },
  {
    id: "4",
    name: "Ana Oliveira",
    email: "ana.oliveira@helpdesk.com",
    disponibility: ["10:00", "11:00", "15:00", "16:00"],
  },
  {
    id: "5",
    name: "Carlos Pereira",
    email: "carlos.pereira@helpdesk.com",
    disponibility: ["08:00", "09:00", "10:00", "11:00"],
  },
  {
    id: "6",
    name: "Luiza Ferreira",
    email: "luiza.ferreira@helpdesk.com",
    disponibility: ["13:00", "14:00", "15:00", "16:00"],
  },
  {
    id: "7",
    name: "Roberto Lima",
    email: "roberto.lima@helpdesk.com",
    disponibility: ["08:00", "10:00", "14:00", "16:00"],
  },
  {
    id: "8",
    name: "Fernanda Alves",
    email: "fernanda.alves@helpdesk.com",
    disponibility: ["09:00", "11:00", "13:00", "15:00"],
  },
  {
    id: "9",
    name: "Ricardo Souza",
    email: "ricardo.souza@helpdesk.com",
    disponibility: ["08:00", "09:00", "15:00", "16:00"],
  },
  {
    id: "10",
    name: "Juliana Cardoso",
    email: "juliana.cardoso@helpdesk.com",
    disponibility: ["10:00", "11:00", "14:00", "15:00"],
  },
  {
    id: "11",
    name: "Carlos Roberto",
    email: "carlos.roberto@helpdesk.com",
    disponibility: ["08:00", "09:00", "13:00", "16:00"],
  },
  {
    id: "12",
    name: "Patrícia Silva",
    email: "patricia.silva@helpdesk.com",
    disponibility: ["09:00", "10:00", "14:00", "15:00"],
  },
  {
    id: "13",
    name: "Rafael Santos",
    email: "rafael.santos@helpdesk.com",
    disponibility: ["08:00", "11:00", "13:00", "14:00"],
  },
  {
    id: "14",
    name: "Amanda Costa",
    email: "amanda.costa@helpdesk.com",
    disponibility: ["10:00", "11:00", "15:00", "16:00"],
  },
];

export function Technician() {
  const [isLoading, setIsLoading] = useState(false);
  const [technician, setTechnician] = useState<
    TechnicianAPIResponse[] | null
  >(MOCK_TECHNICIANS);

  const navigate = useNavigate();
  async function fetchTechnician() {
    setIsLoading(true);
    try {
      const response = await api.get("/technicians");
      setTechnician(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    // fetchTechnician()
  },[])

  return (
    <div>
      <header className="mb-10 flex justify-between">
        <h1 className="text-4xl text-brand-dark">Técnicos</h1>
        <Button
          className="cursor-pointer py-6 w-40"
          onClick={() => navigate("/technician/new")}
        >
          <Plus />
          <span>Novo</span>
        </Button>
      </header>
      <div className="rounded-lg border border-gray-400/50 overflow-y-auto h-[50vh] md:h-[70vh]">
        <Table>
          <TableHeader className="">
            <TableRow className=" border-gray-400/50 ">
              <TableHead className="w-[35%] px-12 py-4 text-left">
                Nome
              </TableHead>
              <TableHead className="w-[35%] px-10 py-4 text-left">
                Email
              </TableHead>
              <TableHead className="w-[25%] px-10 py-4 text-left">
                Disponibilidade
              </TableHead>
              <TableHead className="w-[10%] px-8 py-4 ">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {technician?.map((technician, i) => (
              <TechnicianItem data={technician} key={technician.id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
