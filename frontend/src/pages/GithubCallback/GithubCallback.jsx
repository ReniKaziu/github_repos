import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../common/config/axios.instance";
import React from "react";
import { AuthContext } from "../../context/Auth";

export default function GithubCallback() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const { token, setToken } = React.useContext(AuthContext);

  const sendCode = async () => {
    try {
      const {
        data: { token },
      } = await axiosInstance.get(`/callback?code=${code}`);

      localStorage.setItem("token", token);
      setToken(token);
    } catch {
      alert("An error has occurred");
    }
  };

  React.useEffect(() => {
    if (token) navigate("/home");
  }, [token]);

  React.useEffect(() => {
    sendCode();
  }, []);

  return <div>Logging you in, please wait...</div>;
}
