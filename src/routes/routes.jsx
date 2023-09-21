import { createBrowserRouter } from 'react-router-dom';
import Newsletter from '@/pages/Newsletter/Newsletter';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import SubscribedSuccess from '@/pages/SubscribedSuccess/SubscribedSuccess';
export const routesList = createBrowserRouter([
  {
    path: '/',
    element: <Newsletter />,
    errorElement: <ErrorPage />
  },
  {
    path: 'subscribed',
    element: <SubscribedSuccess />
  }
]);
