import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// Custom hook
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
