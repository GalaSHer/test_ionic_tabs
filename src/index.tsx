import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

setupIonicReact();

import "@ionic/core/css/ionic.bundle.css";

import "./theme/variables.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <IonApp>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IonApp>
    </AuthProvider>
  </React.StrictMode>
);
