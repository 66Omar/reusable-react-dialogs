import { ReactNode } from "react";

export type DialogContextProps = {
  dialog: DialogProps | null;
  setDialog: React.Dispatch<React.SetStateAction<DialogProps | null>>;
};
export type DialogProviderProps = {
  children: ReactNode;
};

export type DialogProps = {
  header: string;
  body: string;
  positive: DialogButton;
  negative?: DialogButton;
  cancelable?: boolean;
};

export type DialogButton = {
  text: string;
  action?: () => void;
};
