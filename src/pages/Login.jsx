import LoginForm from "../components/LoginForm";

function Login(props) {
  const { setLoggedUser } = props;
  return <LoginForm setLoggedUser={setLoggedUser} />;
}

export default Login;
