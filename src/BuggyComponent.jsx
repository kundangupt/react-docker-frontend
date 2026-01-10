import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")}>
      Login
    </button>
  );
}
export default Login;
