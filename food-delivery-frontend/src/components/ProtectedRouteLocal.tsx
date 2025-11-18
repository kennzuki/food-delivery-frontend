import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

type Props = {
 children: React.ReactNode
}

const ProtectedRoute = ({ children }: { children: Props }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // send user to Auth0 login and return to the requested path after auth
      loginWithRedirect({ appState: { returnTo: location.pathname } });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect, location.pathname]);

  if (isLoading)
    return <div className='text-center py-8'>Checking authentication...</div>;
  if (!isAuthenticated) return null; // loginWithRedirect already triggered

  return children;
};

export default ProtectedRoute;
