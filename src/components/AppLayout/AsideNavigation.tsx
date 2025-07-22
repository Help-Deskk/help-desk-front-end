import {
  BriefcaseBusiness,
  ClipboardList,
  Plus,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { EXEMPLE_SESSION } from "../../routes";

export function AsideNavigation() {
  const [activeItem, setActiveItem] = useState("calls");
  const navigate = useNavigate();
  // const { session } = useAuth();

  const allMenus = [
    {
      id: "calls",
      icon: ClipboardList,
      label: "Chamados",
      path: "/",
      roles: ["admin", "technician", "custumer"],
    },
    {
      id: "technician",
      icon: Users,
      label: "Técnico",
      path: "/technician",
      roles: ["admin"],
    },
    {
      id: "customers",
      icon: BriefcaseBusiness,
      label: "Clientes",
      path: "/customers",
      roles: ["admin"],
    },
    {
      id: "services",
      icon: Wrench,
      label: "Serviços",
      path: "/services",
      roles: ["admin"],
    },
    {
      id: "create calls",
      icon: Plus,
      label: "Criar chamado",
      path: "/new-call",
      roles: ["custumer"],
    },
  ];
  const menuItens = allMenus.filter((item) =>
    // item.roles.includes(String(session?.resource_owner.role))
    item.roles.includes(String(EXEMPLE_SESSION.user.role))
  );

  function handleClickItem(id: string, path: string) {
    setActiveItem(id);
    navigate(path);
  }

  return (
    <ul className="p-8 flex flex-col gap-4">
      {menuItens.map((item) => (
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
              activeItem === item.id ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
