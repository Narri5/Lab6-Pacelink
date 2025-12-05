import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonList,
  IonCard,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { pulseOutline } from "ionicons/icons";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      history.push("/tabs/home");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>Pacelink</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        className="ion-padding app-centered"
        style={{ background: "var(--ion-color-light)" }}
      >
        <IonCard
          className="app-card"
          style={{
            borderRadius: 24,
            boxShadow: "0 12px 30px rgba(15,23,42,0.15)",
          }}
        >
          <IonCardContent>
            <div className="ion-text-center">
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "999px",
                  background: "#157a99",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <IonIcon
                  icon={pulseOutline}
                  style={{ fontSize: 36, color: "#ffffff" }}
                />
              </div>

              <IonText>
                <h2 style={{ margin: 0 }}>Welcome Back</h2>
                <p style={{ marginTop: 4, color: "var(--app-subtle-text)" }}>
                  Log in to continue tracking your runs.
                </p>
              </IonText>
            </div>

            <IonList className="ion-margin-top">
              <IonItem
                lines="none"
                style={{
                  borderRadius: 12,
                  background: "#f3f4f6",
                  marginBottom: 12,
                }}
              >
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value || "")}
                  placeholder="your@email.com"
                />
              </IonItem>

              <IonItem
                lines="none"
                style={{
                  borderRadius: 12,
                  background: "#f3f4f6",
                }}
              >
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value || "")}
                  placeholder="••••••••"
                />
              </IonItem>
            </IonList>

            <IonButton
              fill="clear"
              size="small"
              className="ion-margin-top"
              style={{ paddingInline: 0 }}
            >
              Forgot Password?
            </IonButton>

            <IonButton
              expand="block"
              className="ion-margin-top"
              color="primary"
              style={{ borderRadius: 999 }}
              onClick={handleLogin}
            >
              Login
            </IonButton>

            <IonText
              className="ion-text-center ion-margin-top"
              style={{ display: "block", color: "var(--app-subtle-text)" }}
            >
              Don&apos;t have an account?{" "}
              <span style={{ color: "#157a99", fontWeight: 600 }}>Sign Up</span>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
