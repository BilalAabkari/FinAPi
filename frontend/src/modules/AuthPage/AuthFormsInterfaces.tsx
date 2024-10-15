import { AuthType } from "./AuthSwitch.tsx";

export interface AuthFormsProps {
  goToAuthType: (type: AuthType) => void;
}
