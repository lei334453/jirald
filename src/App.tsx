import "App.css";

import React from "react";
import { UnauthtivcaltedApp } from "Unauth-providercatied-app";

import { AuthenticaledApp } from "./authprovideited-app";
import { useAuth } from "./context/auth-context";

export const App: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticaledApp /> : <UnauthtivcaltedApp />}
    </div>
  );
};

export default App;
