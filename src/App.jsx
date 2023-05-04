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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="welcome-page" element={<StartUpPage />} />
      <Route element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={['User']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
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
