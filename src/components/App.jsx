import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <p> Loading ...</p>
    </div>
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route 
            path="*" 
            element={
              <Navigate to="/" />
            } 
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
