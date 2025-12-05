import React from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { home, addCircle, person } from "ionicons/icons";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Runs from "./pages/Tab2";
import Profile from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Public routes */}
        <Route path="/welcome" component={Welcome} exact />
        <Route path="/login" component={Login} exact />

        {/* Tabs area */}
        <Route
          path="/tabs"
          render={() => (
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/tabs/home" component={Home} exact />
                <Route path="/tabs/runs" component={Runs} exact />
                <Route path="/tabs/profile" component={Profile} exact />
                <Redirect exact from="/tabs" to="/tabs/home" />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                  <IonIcon icon={home} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="runs" href="/tabs/runs">
                  <IonIcon icon={addCircle} />
                  <IonLabel>Runs</IonLabel>
                </IonTabButton>

                <IonTabButton tab="profile" href="/tabs/profile">
                  <IonIcon icon={person} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          )}
        />

        {/* Default redirect to welcome */}
        <Redirect exact from="/" to="/welcome" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
