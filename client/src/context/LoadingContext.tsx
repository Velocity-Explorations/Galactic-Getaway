// /Users/parissyoungblood/Documents/Velocity/Hackathon/AWS/client/src/context/LoadingContext.tsx
import { createContext, useContext, useState } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = (props: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (value: boolean) => {
    setLoading(value);

    if (value) {
      // Simulate delay
      setTimeout(() => setLoading(false), 2000); // Adjust the delay time as needed
    }
  };

  const value: LoadingContextType = {
    loading,
    setLoading: toggleLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const ctx = useContext(LoadingContext);

  if (!ctx) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }

  return ctx;
};
