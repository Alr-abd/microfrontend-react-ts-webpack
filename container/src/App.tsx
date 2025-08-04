import React, { Suspense, lazy } from 'react';

const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));

const App: React.FC = () => {
  return (
    <div>
      <h1>Container</h1>
      <Suspense fallback={<div>Loading App1...</div>}>
        <App1 />
      </Suspense>
      <Suspense fallback={<div>Loading App2...</div>}>
        <App2 />
      </Suspense>
    </div>
  );
};

export default App;
