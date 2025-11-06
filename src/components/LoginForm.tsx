import React, { useState } from "react";
import {
  IonCard,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";

type Props = {
  onSubmit: (username: string, password: string) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    if (!username.trim() || !password.trim()) {
      setError("Введите логин и пароль");
      return;
    }
    onSubmit(username.trim(), password);
  };

  return (
    <IonCard style={{ padding: 16 }}>
      <IonItem>
        <IonLabel position="stacked">Username</IonLabel>
        <IonInput
          value={username}
          onIonInput={(e) => setUsername(String(e.detail.value ?? ""))}
        />
      </IonItem>

      <IonItem>
        <IonLabel position="stacked">Password</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonInput={(e) => setPassword(String(e.detail.value ?? ""))}
        />
      </IonItem>

      {error && (
        <div style={{ padding: "8px 16px" }}>
          <IonText color="danger">{error}</IonText>
        </div>
      )}

      <div style={{ padding: 16 }}>
        <IonButton expand="block" type="button" onClick={handleSubmit}>
          Войти
        </IonButton>
      </div>
    </IonCard>
  );
};

export default LoginForm;
