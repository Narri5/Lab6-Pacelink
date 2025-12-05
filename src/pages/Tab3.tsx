import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
  IonIcon,
} from "@ionic/react";
import {
  createOutline,
  pulseOutline,
  walkOutline,
  speedometerOutline,
  trophyOutline,
} from "ionicons/icons";

const Profile: React.FC = () => {
  const [name, setName] = useState("Sarah Johnson");
  const [email, setEmail] = useState("sarah@example.com");
  const [showEdit, setShowEdit] = useState(false);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        {/* Container to control width & overlap */}
        <div
          style={{
            maxWidth: 420,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* TOP BLUE HEADER CARD */}
          <div
            style={{
              background: "#157a99",
              borderRadius: 24,
              paddingTop: 24,
              paddingBottom: 56, // space for floating stats card
              paddingInline: 24,
              color: "#ffffff",
              textAlign: "center",
              boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
            }}
          >
            <IonText>
              <h2 style={{ marginTop: 0, marginBottom: 16 }}>Profile</h2>
            </IonText>

            <IonAvatar
              style={{
                width: 80,
                height: 80,
                margin: "0 auto 12px",
                border: "3px solid #ffffff",
              }}
            >
              <img
                alt="User avatar"
                src="https://randomuser.me/api/portraits/women/8.jpg"
              />
            </IonAvatar>

            <IonText>
              <h3 style={{ margin: 0 }}>{name}</h3>
              <p style={{ margin: "4px 0 0", opacity: 0.9 }}>{email}</p>
            </IonText>
          </div>

          {/* FLOATING STATS CARD */}
          <IonCard
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              bottom: -48,
              borderRadius: 18,
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.25)",
              zIndex: 2,
            }}
          >
            <IonCardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
                paddingInline: 16,
              }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <IonIcon icon={pulseOutline} style={{ fontSize: 24 }} />
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "var(--app-subtle-text)",
                  }}
                >
                  Total Distance
                </p>
                <h3 style={{ margin: 0 }}>0.0 km</h3>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <IonIcon icon={walkOutline} style={{ fontSize: 24 }} />
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "var(--app-subtle-text)",
                  }}
                >
                  Longest Run
                </p>
                <h3 style={{ margin: 0 }}>0.0 km</h3>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <IonIcon icon={speedometerOutline} style={{ fontSize: 24 }} />
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 11,
                    textTransform: "uppercase",
                    color: "var(--app-subtle-text)",
                  }}
                >
                  Avg Pace
                </p>
                <h3 style={{ margin: 0 }}>--</h3>
              </div>
            </IonCardContent>
          </IonCard>
        </div>

        {/* spacer to account for floating card */}
        <div style={{ height: 72 }} />

        {/* EDIT PROFILE ROW CARD */}
        <IonCard
          className="app-card"
          style={{ maxWidth: 420, margin: "0 auto 12px" }}
        >
          <IonItem
            button
            detail={false}
            lines="none"
            onClick={() => setShowEdit(true)}
          >
            <IonIcon icon={createOutline} slot="start" />
            <IonLabel>Edit Profile</IonLabel>
          </IonItem>
        </IonCard>

        {/* ACHIEVEMENTS CARD */}
        <IonCard
          className="app-card"
          style={{ maxWidth: 420, margin: "0 auto" }}
        >
          <IonCardContent>
            <IonText>
              <h3 style={{ marginTop: 0, color: "var(--app-heading-color)" }}>
                Achievements
              </h3>
            </IonText>
            <IonList>
              {/* Active achievement */}
              <IonItem lines="none">
                <IonIcon
                  icon={trophyOutline}
                  slot="start"
                  style={{ color: "var(--ion-color-secondary)" }}
                />
                <IonLabel>
                  <strong>First Run</strong>
                  <p>Completed your first run</p>
                </IonLabel>
              </IonItem>

              {/* Grey / locked achievements */}
              <IonItem lines="none">
                <IonIcon
                  icon={trophyOutline}
                  slot="start"
                  style={{ color: "#d1d5db" }}
                />
                <IonLabel style={{ color: "#9ca3af" }}>
                  <strong>10K Club</strong>
                  <p>Run 10 kilometres</p>
                </IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonIcon
                  icon={trophyOutline}
                  slot="start"
                  style={{ color: "#d1d5db" }}
                />
                <IonLabel style={{ color: "#9ca3af" }}>
                  <strong>100K Total</strong>
                  <p>Run 100 total kilometres</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* FAKE MODAL OVERLAY */}
        {showEdit && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <IonCard
              style={{
                width: "90%",
                maxWidth: 360,
                borderRadius: 16,
                boxShadow: "0 12px 30px rgba(15,23,42,0.35)",
              }}
            >
              <IonCardContent>
                <IonText className="ion-text-center">
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: 16,
                      color: "var(--app-heading-color)",
                    }}
                  >
                    Edit Profile
                  </h3>
                </IonText>

                <IonList>
                  <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput
                      value={name}
                      onIonChange={(e) => setName(e.detail.value || "")}
                    />
                  </IonItem>
                  <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput
                      value={email}
                      onIonChange={(e) => setEmail(e.detail.value || "")}
                    />
                  </IonItem>
                </IonList>

                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  onClick={() => setShowEdit(false)}
                >
                  Save Changes
                </IonButton>
                <IonButton
                  expand="block"
                  fill="outline"
                  color="medium"
                  className="ion-margin-top"
                  onClick={() => setShowEdit(false)}
                >
                  Cancel
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
