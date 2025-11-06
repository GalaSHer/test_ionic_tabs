import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (username: string, _password: string) => {
    login(username);
    navigate("/tabs/home", { replace: true });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Вход</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Введите логин и пароль</h2>
        <LoginForm onSubmit={handleSubmit} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
