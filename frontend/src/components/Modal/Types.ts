import { ReactNode } from "react";
import { SxProps } from "@mui/material";

export interface ModalHeaderProps {
    title: string;
    children: ReactNode;
}

export interface CustomModalProps {
    children: ReactNode;
    open: boolean;
    paperSxProps: SxProps;
}
