import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;