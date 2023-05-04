import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import StartUpPage from './Pages/StartUpPage';
import Layout from './Components/Extra/Layout';
import PersistLogin from './Components/Extra/PersistLogin';
import RequireAuth from './Components/Extra/RequireAuth';
import Dashboard from './Pages/Dashboard';
import NotFoundPage from './Pages/NotFoundPage';
import Client from './Pages/Client';
import Request from './Pages/Request';
import ChangePassword from './Pages/ChangePassword';
import AdminOnlyPage from './Pages/AdminOnlyPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/welcome-page" element={<StartUpPage />} />
      <Route path="/" element={<StartUpPage />} />
      <Route element={<PersistLogin />}>
        <Route element={<Layout />}>
          <Route element={<RequireAuth allowedRoles={['User', 'Admin']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/client" element={<Client />} />
            <Route path="/request" element={<Request />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>{' '}
          <Route element={<RequireAuth allowedRoles={['Admin']} />}>
            <Route path="/admin" element={<AdminOnlyPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </>
  )
);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
