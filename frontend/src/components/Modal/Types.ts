import { ReactNode } from "react";

export interface ModalHeaderProps {
  title: string;
  children: ReactNode;
}

export interface CustomModalProps {
  children: ReactNode;
  open: boolean;
}
