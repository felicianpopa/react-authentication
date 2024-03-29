import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({}); // Set the auth value as empty on the AuthContext.Provider
    try {
      const response = await axios("/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
