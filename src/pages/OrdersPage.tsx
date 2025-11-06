import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
} from "@ionic/react";

const orders = [
  { id: 1, name: "Установка плинтуса" },
  { id: 2, name: "Проверка счетчиков" },
];

const OrdersPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Заказы</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {orders.map((o) => (
            <IonCard key={o.id} style={{ marginBottom: 12 }}>
              <IonCardHeader>
                <IonCardTitle>{o.name}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default OrdersPage;
