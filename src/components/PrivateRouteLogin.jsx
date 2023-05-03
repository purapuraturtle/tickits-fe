import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PrivateRouteLOGIN = ({ children }) => {
  const userData = useSelector((state) => state.user.data?.token);
  const router = useRouter();

  if (userData) {
    // Redirect ke halaman dashboard jika user sudah login
    router.push("/");
    return null;
  }

  return children;
};

export default PrivateRouteLOGIN;
