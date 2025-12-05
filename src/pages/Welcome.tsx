import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { pulseOutline } from "ionicons/icons";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>Pacelink</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding app-centered">
        <IonCard className="app-card">
          <IonCardContent className="ion-text-center">
            <IonIcon
              icon={pulseOutline}
              style={{ fontSize: "64px", color: "var(--ion-color-primary)" }}
            />
            <IonText>
              <h1 style={{ marginTop: "16px", color: "var(--app-heading-color)" }}>
                Run. Log. Connect.
              </h1>
              <p style={{ color: "var(--app-subtle-text)" }}>
                Track your runs, set goals and stay motivated with your running
                community.
              </p>
            </IonText>

            <IonButton
              expand="block"
              className="ion-margin-top"
              color="primary"
              routerLink="/login"
            >
              Get Started
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
