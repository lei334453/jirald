/*
 * @edu-class-demo: personal
 */
/*
 * @edu-class-demo: personal
 */
import { useAuth } from "context/auth-context";
import React from "react";

import { ProjectListScreen } from "./screens/project-list";

export const AuthenticaledApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
