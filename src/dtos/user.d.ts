type UserAPIRole = "admin" | "customer" | "technician";

type UserAPIResponse = {
  token: string;
  resouce_owner: {
    id: string;
    email: string;
    role: UserAPIRole;
  };
};
