import React, { createContext, useContext } from "react";
import { bessaUITheme } from "../utils/bessa-ui-theme";

interface BessaUIContextProps {
  // value: string;
  // setValue: (value: string) => void;
}

interface BessaUIProviderProps {
  children: React.ReactNode;
  // theme?: any;
}

export const BessaUIContext = createContext<BessaUIContextProps | null>(null);

export const useBessaUI = () => useContext(BessaUIContext);

export const BessaUIProvider: React.FC<BessaUIProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <BessaUIContext.Provider value={{ theme: { ...bessaUITheme, ...theme } }}>
      {children}
    </BessaUIContext.Provider>
  );
};
