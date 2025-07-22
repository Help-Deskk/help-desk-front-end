import { Edit2 } from "lucide-react";

type TechnicianItemProps = {
  data: TechnicianAPIResponse;
};

export function TechnicianItem({ data }: TechnicianItemProps) {
  return (
    <div className="flex justify-between py-5 px-4 items-center ">
      <div className="flex items-center gap-4">
        <div className="h-15 w-15 rounded-full bg-brand-dark">
          <span className="flex items-center justify-center h-full">AU</span>
        </div>
        <h1>{data.name}</h1>
      </div>
      <p>{data.email}</p>
      {data.disponibility.map((disponibility) => (
        <div className="capitalize">
          <span className="">{disponibility}</span>
        </div>
      ))}
      <button>
        <Edit2 />
      </button>
    </div>
  );
}
