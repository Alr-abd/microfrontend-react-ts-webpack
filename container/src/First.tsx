import React, { lazy, Suspense } from 'react'
const App1 = lazy(() => import("app1/App"));

function First() {
  return (
    <Suspense fallback={<div style={{height: "100vh", width: "100%", background: "#f3f4f6", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "30px"}}>Loading App1...</div>}>
            <App1 />
          </Suspense>
  )
}

export default First