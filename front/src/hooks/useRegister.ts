// hooks
import { useMutation } from "@tanstack/react-query";

// services
import fetchUsers from "../services/fetchUsers";

export const useRegister = () => {
  return useMutation({
    mutationFn: fetchUsers,
  });
};

export default useRegister;
