import React, { lazy, Suspense } from 'react'
const App2 = lazy(() => import("app2/App"));

function Second() {
  return (
    <Suspense fallback={<div style={{height: "100vh", width: "100%", background: "#f3f4f6", display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "30px"}}>Loading App2...</div>}>
            <App2 />
          </Suspense>
  )
}

export default Second