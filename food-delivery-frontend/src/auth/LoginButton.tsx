import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      onClick={() => loginWithRedirect()} 
      className="py-2 px-4 bg-gray-400 text-white rounded-md hover:bg-green-600 transition-colors duration-300 cursor-pointer"
    >
      Log In
    </button>
  );
};

export default LoginButton;