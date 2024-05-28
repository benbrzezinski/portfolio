import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import RestrictedRoute from "./RestrictedRoute";

const Home = lazy(() => import("../pages/Home"));
const Success = lazy(() => import("../pages/Success"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute redirectTo="/success" component={<Home />} />}
        />
        <Route
          path="/success"
          element={<RestrictedRoute redirectTo="/" component={<Success />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
