type UserAPIRole = "admin" | "customer" | "technician";

type UserAPIResponse = {
  token: string;
  resource_owner: {
    id: string;
    email: string;
    role: UserAPIRole;
  };
};
