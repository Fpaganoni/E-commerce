// hooks
import { useMutation } from "@tanstack/react-query";

// services
import fetchLogin from "../services/fetchLogin";

const useLogin = () => {
  return useMutation({
    mutationFn: fetchLogin,
  });
};

export default useLogin;
