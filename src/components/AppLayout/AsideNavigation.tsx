import { BriefcaseBusiness, ClipboardList, Users, Wrench } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function AsideNavigation() {
  const [activeItem, setActiveItem] = useState("calls");
  const navigate = useNavigate();
  const session = {
    user: {
      role: "",
    },
  };

  const menuItems = [
    { id: "calls", icon: ClipboardList, label: "Chamados", path: "/calls" },
    { id: "technician", icon: Users, label: "Técnico", path: "/technician" },
    {
      id: "customers",
      icon: BriefcaseBusiness,
      label: "Clientes",
      path: "/customers",
    },
    { id: "services", icon: Wrench, label: "Serviços", path: "/services" },
  ];

  function handleClickItem(id: string, path: string) {
    setActiveItem(id);
    navigate(path);
  }

  return (
    <ul className="p-8 flex flex-col gap-4">
      {menuItems.map((item) => (
        <li
          key={item.id}
          onClick={() => handleClickItem(item.id, item.path)}
          className={`flex items-center gap-4 p-5 rounded-lg cursor-pointer transition-colors ${
            activeItem === item.id ? "bg-brand-dark" : "hover:bg-brand-dark"
          }`}
        >
          <item.icon
            size={20}
            color={`${activeItem === item.id ? "#ffffff" : "#858b99"}`}
          />
          <span
            className={`text-xl ${
              activeItem === item.id ? "text-white" : "text-gray-400"
            }`}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
