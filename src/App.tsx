import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/Login";
import TabsPage from "./pages/TabsPage";

const App: React.FC = () => {
  const { username, isReady } = useAuth();

  if (!isReady) {
    return null;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/tabs/*"
        element={username ? <TabsPage /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/"
        element={<Navigate to={username ? "/tabs/home" : "/login"} replace />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
