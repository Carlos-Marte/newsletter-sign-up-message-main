import { useRouteError } from 'react-router-dom';

function ErrorPage () {
  const error = useRouteError();

  return (
    <div>
      <p>{error.statusText || error.status}</p>
    </div>
  );
}
export default ErrorPage;
