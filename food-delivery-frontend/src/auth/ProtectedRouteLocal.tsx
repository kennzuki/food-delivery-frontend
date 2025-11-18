import { Navigate, useLocation } from 'react-router;
 your store

const ProtectedRouteLocal = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRouteLocal;
