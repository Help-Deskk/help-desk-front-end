import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Edit2 } from "lucide-react";

type TechnicianItemProps = {
  data: TechnicianAPIResponse;
};

function getInicial(name: string) {
  if (name.split(" ").length >= 2) {
    let inicial = name.split(" ")[0][0].concat(name.split(" ")[1][0]);
    return inicial;
  }
  return name.split("")[0].concat(name.split("")[1]);
}

export function TechnicianItem({ data }: TechnicianItemProps) {
  return (
    <TableRow className="border-b border-gray-400/50">
      <TableCell className="px-10 py-5">
        <div className="flex items-center gap-4">
          <div className="h-15 w-15 rounded-full bg-brand-dark">
            <span className="flex items-center justify-center h-full text-gray-600 text-xl">
              {getInicial(data.name)}
            </span>
          </div>
          <h1 className="text-gray-200 text-lg font-semibold">{data.name}</h1>
        </div>
      </TableCell>
      <TableCell className="px-10 py-5">
        <p className="text-gray-200 text-lg">{data.email}</p>
      </TableCell>
      <TableCell className="px-10 py-8 w-[30%] flex gap-2 items-center">
        <div>
          {data.disponibility.slice(0, 4).map((hour, i) => (
            <span
              className="p-4 rounded-full border-2 border-gray-400 mx-1"
              key={i}
            >
              <span className=" text-gray-400">{hour}</span>
            </span>
          ))}
        </div>
        {data.disponibility.length > 4 && (
          <div className="flex items-end text-gray-400 text-2xl">...</div>
        )}
      </TableCell>

      <TableCell className="px-10 py-5">
        <Button className="cursor-pointer">
          <Edit2 />
        </Button>
      </TableCell>
    </TableRow>
  );
}
