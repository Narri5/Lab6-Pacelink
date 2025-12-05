import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonList,
  IonText,
  IonCard,
  IonCardContent,
} from "@ionic/react";

interface Run {
  id: number;
  distance: string;
  time: string;
  note: string;
}

const Runs: React.FC = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [runs, setRuns] = useState<Run[]>([]);

  const handleAddRun = () => {
    if (!distance.trim() || !time.trim()) {
      alert("Please add distance and time.");
      return;
    }

    const newRun: Run = {
      id: Date.now(),
      distance,
      time,
      note,
    };

    setRuns([newRun, ...runs]);
    setDistance("");
    setTime("");
    setNote("");
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>My Runs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonCard className="app-card">
          <IonCardContent>
            <IonText>
              <h2 style={{ color: "var(--app-heading-color)" }}>
                Add a new run
              </h2>
            </IonText>

            <IonList className="ion-margin-top">
              <IonItem>
                <IonLabel position="stacked">Distance (km)</IonLabel>
                <IonInput
                  type="number"
                  value={distance}
                  onIonChange={(e) => setDistance(e.detail.value || "")}
                  placeholder="e.g. 5.0"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">
                  Time (mm:ss or hh:mm:ss)
                </IonLabel>
                <IonInput
                  value={time}
                  onIonChange={(e) => setTime(e.detail.value || "")}
                  placeholder="e.g. 30:15"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Notes (optional)</IonLabel>
                <IonTextarea
                  value={note}
                  onIonChange={(e) => setNote(e.detail.value || "")}
                  placeholder="How did it feel?"
                />
              </IonItem>
            </IonList>

            <IonButton
              expand="block"
              className="ion-margin-top"
              color="secondary"
              onClick={handleAddRun}
            >
              Save run
            </IonButton>
          </IonCardContent>
        </IonCard>

        {runs.length > 0 && (
          <IonCard className="app-card ion-margin-top">
            <IonCardContent>
              <IonText>
                <h3 style={{ color: "var(--app-heading-color)" }}>
                  Saved runs (local only)
                </h3>
              </IonText>
              <IonList>
                {runs.map((run) => (
                  <IonItem key={run.id}>
                    <IonLabel>
                      <h2>
                        {run.distance} km • {run.time}
                      </h2>
                      {run.note && <p>{run.note}</p>}
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Runs;
