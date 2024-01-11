import { createContext, useContext, useState } from "react";
import {
  DialogContextProps,
  DialogProps,
  DialogProviderProps,
} from "../types/DialogTypes";

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [dialog, setDialog] = useState<DialogProps | null>(null);

  const contextData: DialogContextProps = {
    dialog,
    setDialog,
  };
  return (
    <DialogContext.Provider value={contextData}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};



