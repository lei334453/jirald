/*
 * @edu-class-demo: personal
 */
import { ReactNode } from "react";

import { AuthProvider } from "./auth-context";

/*
 * @edu-class-demo: personal
 */
export const AppProviders = ({ children }: { children: ReactNode }) => {
  // return <AuthProvider children={children}></AuthProvider>
  return <AuthProvider>{children}</AuthProvider>;
};
