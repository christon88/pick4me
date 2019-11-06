import { useContext } from "react";
import { userContext } from ".";

const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export default useSession;
