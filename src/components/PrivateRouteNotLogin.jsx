import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PrivateRouteNotLogin = ({ children }) => {
  const userData = useSelector((state) => state.user.data?.data?.token);
  const router = useRouter();

  if (!userData) {
    router.push("/auth");
    return null;
  }

  return children;
};

export default PrivateRouteNotLogin;
