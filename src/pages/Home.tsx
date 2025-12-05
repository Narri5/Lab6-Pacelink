import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";

import {
  walkOutline,
  timeOutline,
  speedometerOutline,
  heartOutline,
  chatbubbleOutline,
  repeatOutline,
} from "ionicons/icons";

const FriendsFeed: React.FC = () => {
  const feed = [
    {
      name: "Alex Chen",
      time: "2 hours ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      distance: "8.5 km",
      duration: "45 min",
      pace: "5.3 min/km",
      message: "Great morning run! Feeling energized 💪",
      likes: 12,
      comments: 3,
      shares: 1,
    },
    {
      name: "Emma Wilson",
      time: "5 hours ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      distance: "5 km",
      duration: "30 min",
      pace: "6.0 min/km",
      message: "Easy recovery run today.",
      likes: 8,
      comments: 1,
      shares: 0,
    },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding" color="light">
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          {/* BLUE HEADER BLOCK (no Ionic magic, just a div) */}
          <div
            style={{
              background: "#157a99",
              color: "#ffffff",
              borderRadius: 24,
              boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
              padding: "20px 20px 18px",
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Friends Feed
            </h2>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: 14,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.3,
              }}
            >
              See what your friends are up to
            </p>
          </div>

          {/* COMPARE STATS BUTTON */}
          <IonButton
            expand="block"
            fill="outline"
            color="primary"
            style={{
              borderRadius: 999,
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            <IonIcon
              icon={speedometerOutline}
              slot="start"
              style={{ fontSize: 18 }}
            />
            Compare Stats
          </IonButton>

          {/* FRIEND CARDS */}
          {feed.map((item, index) => (
            <IonCard
              key={index}
              style={{
                borderRadius: 16,
                paddingBottom: 6,
                marginBottom: 20,
              }}
            >
              <IonCardContent>
                {/* Avatar + name + time */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <IonAvatar style={{ width: 54, height: 54 }}>
                    <img src={item.avatar} alt="avatar" />
                  </IonAvatar>

                  <div>
                    <strong style={{ fontSize: 16 }}>{item.name}</strong>
                    <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Stats row */}
                <div
                  style={{
                    marginTop: 12,
                    borderRadius: 14,
                    background: "#f3f4f6",
                    padding: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <IonIcon icon={walkOutline} />
                    <p style={{ margin: 0, fontSize: 12 }}>Distance</p>
                    <strong>{item.distance}</strong>
                  </div>

                  <div style={{ flex: 1 }}>
                    <IonIcon icon={timeOutline} />
                    <p style={{ margin: 0, fontSize: 12 }}>Duration</p>
                    <strong>{item.duration}</strong>
                  </div>

                  <div style={{ flex: 1 }}>
                    <IonIcon icon={speedometerOutline} />
                    <p style={{ margin: 0, fontSize: 12 }}>Pace</p>
                    <strong>{item.pace}</strong>
                  </div>
                </div>

                {/* Message */}
                <p style={{ marginTop: 12 }}>{item.message}</p>

                {/* Reactions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginTop: 8,
                    opacity: 0.7,
                    fontSize: 13,
                  }}
                >
                  <span>
                    <IonIcon icon={heartOutline} /> {item.likes}
                  </span>
                  <span>
                    <IonIcon icon={chatbubbleOutline} /> {item.comments}
                  </span>
                  <span>
                    <IonIcon icon={repeatOutline} /> {item.shares}
                  </span>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FriendsFeed;
