import React, { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import { useRoutes } from 'react-router-dom';
import { router as routes } from "./routes/router";

const App = () => {
  const router = useRoutes(routes);

  return (
    <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          {router}
        </ErrorBoundary>
      </Suspense>
  )
}

export default App